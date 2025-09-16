

import React, { useState, useCallback, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { questions } from './constants/questions/index';
import type { Question, IncorrectlyAnsweredQuestion, ChatMessage, QuizMode, SessionHistoryEntry } from './types';
import { quizModeText } from './types';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';
import SessionStats from './components/SessionStats';
import ReviewSheet from './components/ReviewSheet';
import NotesModal from './components/NotesModal';
import AITutorChat from './components/AITutorChat';
import TimerDisplay from './components/TimerDisplay';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: (Question | IncorrectlyAnsweredQuestion)[]): Question[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray.map(q => {
    const { userAnswers, ...question } = q as IncorrectlyAnsweredQuestion;
    return question;
  });
};

const calculateScoreAndCorrectness = (userAnswers: string[], question: Question): { score: number; isFullyCorrect: boolean } => {
  if (!userAnswers || userAnswers.length === 0) return { score: 0, isFullyCorrect: false };

  const correctAnswers = question.answer;
  let score = 0;

  userAnswers.forEach(answer => {
    if (correctAnswers.includes(answer)) {
      score++;
    } else {
      // In multiple choice, selecting a wrong answer penalizes the score for that question
      if(question.isMultipleChoice) score--;
    }
  });

  const isFullyCorrect = score === correctAnswers.length && userAnswers.length === correctAnswers.length;
  
  // Ensure score for a single question isn't negative
  const finalScore = Math.max(0, score);

  return { score: finalScore, isFullyCorrect };
};


const formatDuration = (totalSeconds: number) => {
    if (totalSeconds < 0) totalSeconds = 0;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};


const App: React.FC = () => {
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'completed' | 'reviewing'>('setup');
  const [quizMode, setQuizMode] = useState<QuizMode>('random');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);
  const [wasCurrentAnswerCorrect, setWasCurrentAnswerCorrect] = useState(false);
  const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] = useState<IncorrectlyAnsweredQuestion[]>([]);
  
  const [sessionHistory, setSessionHistory] = useState<SessionHistoryEntry[]>([]);

  // Timer states
  const [timer, setTimer] = useState(90 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [finalTime, setFinalTime] = useState<number | null>(null);

  // AI states
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [notesResult, setNotesResult] = useState('');
  const [isNotesLoading, setIsNotesLoading] = useState(false);
  const [notesError, setNotesError] = useState<string | null>(null);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorMessages, setTutorMessages] = useState<ChatMessage[]>([]);
  const [isTutorLoading, setIsTutorLoading] = useState(false);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [tutorError, setTutorError] = useState<string | null>(null);
  const [tutorQuestion, setTutorQuestion] = useState<Question | null>(null);

  const currentQuestion = activeQuestions[currentQuestionIndex];
  
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('quizSessionHistory');
      if (savedHistory) {
        setSessionHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load session history from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('quizSessionHistory', JSON.stringify(sessionHistory));
    } catch (error) {
      console.error("Failed to save session history to localStorage", error);
    }
  }, [sessionHistory]);

  // FIX: Moved handleSubmit and handleNextQuestion declarations before the useEffect hook that uses them to resolve block-scoped variable errors.
  const handleSubmit = useCallback(() => {
    if (isSubmitted || selectedAnswers.length === 0) return;
    const { score, isFullyCorrect } = calculateScoreAndCorrectness(selectedAnswers, currentQuestion);
    const possibleScore = currentQuestion.answer.length;
    
    setCurrentScore(prev => prev + score);
    setTotalPossibleScore(prev => prev + possibleScore);
    setWasCurrentAnswerCorrect(isFullyCorrect);
    
    if (!isFullyCorrect) {
      setIncorrectlyAnsweredQuestions(prev => [...prev, { ...currentQuestion, userAnswers: selectedAnswers }]);
    }
    setQuestionsCompleted(prev => prev + 1);
    setIsSubmitted(true);
  }, [selectedAnswers, currentQuestion, isSubmitted]);

  const handleNextQuestion = useCallback(() => {
    if(!isSubmitted && quizState === 'active') { // Handle auto-submit case from timer
        handleSubmit();
        // Give user a moment to see the result before moving on
        setTimeout(() => handleNextQuestion(), 2000); 
        return;
    }

    setIsSubmitted(false);
    setSelectedAnswers([]);
    
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < activeQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      let timeTakenStr: string | undefined = undefined;
      if (quizMode === 'cert-simulation') {
        setIsTimerRunning(false);
        const timeTakenSeconds = 90 * 60 - timer;
        setFinalTime(timeTakenSeconds);
        timeTakenStr = formatDuration(timeTakenSeconds);
      }
      
      // Use a function to get the latest state values for the history entry
      setTotalPossibleScore(currentTotal => {
        setCurrentScore(currentFinalScore => {
          const newHistoryEntry: SessionHistoryEntry = {
            mode: quizModeText[quizMode],
            score: currentFinalScore,
            totalPossible: currentTotal,
            date: new Date().toLocaleString(),
            timeTaken: timeTakenStr,
          };
          setSessionHistory(prev => [newHistoryEntry, ...prev].slice(0, 10));
          return currentFinalScore;
        });
        return currentTotal;
      });
      
      setQuizState('completed');
    }
  }, [currentQuestionIndex, activeQuestions, quizMode, timer, isSubmitted, handleSubmit]);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isTimerRunning && quizState === 'active') {
        intervalId = window.setInterval(() => {
            setTimer((prev) => {
              if (prev <= 1) {
                // Auto-submit current question and move to next, or end quiz
                handleSubmit();
                setTimeout(() => handleNextQuestion(), 2000); 
                return 0;
              }
              return prev - 1
            });
        }, 1000);
    }
    return () => {
        if (intervalId) {
            window.clearInterval(intervalId);
        }
    };
  }, [isTimerRunning, quizState, handleSubmit, handleNextQuestion]);

  const startNewSession = (mode: QuizMode) => {
    let newQuestions: Question[];
    setQuizMode(mode);
    setIsTimerRunning(false);
    setFinalTime(null);

    switch (mode) {
      case 'sequential':
        newQuestions = [...questions].sort((a, b) => a.id - b.id);
        break;
      case 'quick':
        newQuestions = shuffleArray(questions).slice(0, Math.min(25, questions.length));
        break;
      case 'quick-50':
        newQuestions = shuffleArray(questions).slice(0, Math.min(50, questions.length));
        break;
      case 'cert-simulation':
        newQuestions = shuffleArray(questions).slice(0, Math.min(90, questions.length));
        setTimer(90 * 60);
        setIsTimerRunning(true);
        break;
      case 'random':
      default:
        newQuestions = shuffleArray(questions);
        break;
    }
    setActiveQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setQuestionsCompleted(0);
    setCurrentScore(0);
    setTotalPossibleScore(0);
    setIncorrectlyAnsweredQuestions([]);
    setQuizState('active');
  };

  const startRedoIncorrectSession = () => {
    if (incorrectlyAnsweredQuestions.length === 0) return;
    const newQuestions = shuffleArray(incorrectlyAnsweredQuestions);
    setQuizMode('random'); // Treat redo as a random session
    setActiveQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setQuestionsCompleted(0);
    setCurrentScore(0);
    setTotalPossibleScore(0);
    setIncorrectlyAnsweredQuestions([]);
    setIsTimerRunning(false);
    setFinalTime(null);
    setQuizState('active');
  };

  const clearHistory = () => {
    setSessionHistory([]);
  };

  const handleGetNotes = useCallback(async () => {
    if (!currentQuestion) return;
    if (!process.env.API_KEY) {
      setNotesError("API_KEY environment variable not set. This feature cannot be used.");
      setIsNotesModalOpen(true);
      return;
    }

    setIsNotesModalOpen(true);
    setIsNotesLoading(true);
    setNotesResult('');
    setNotesError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const correctChoiceText = currentQuestion.answer.map(ca => {
        const option = currentQuestion.options.find(o => o.label === ca);
        return `'${ca}: ${option?.text}'`;
      }).join(' and ');
      
      const prompt = `Based on the following CompTIA Security+ question and its correct answer, please generate concise study notes in Markdown format. The notes should focus ONLY on the core concept of the correct answer.

**Question:**
${currentQuestion.question}

**Correct Answer:**
${correctChoiceText}

**Explanation:**
"${currentQuestion.explanation}"

Please structure your response using ONLY the following Markdown format. Do not add any extra text, introductions, or summaries.

**Key Concept:** A one-sentence summary of the main idea.
**Definition:** A clear, simple definition of the concept.
**Importance:** A brief explanation of why this concept is important in cybersecurity.`;

      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            systemInstruction: "You are an expert academic note-taking assistant. Your task is to generate study notes in Markdown format. You MUST strictly follow the user's requested structure: **Key Concept:**, **Definition:**, and **Importance:**. Do not add any extra text, headers, or conversational pleasantries. Adhere strictly to the format."
          }
      });
      
      setNotesResult(response.text);

    } catch (error) {
      console.error("Error generating notes:", error);
      setNotesError("Sorry, an error occurred while generating the notes. Please try again later.");
    } finally {
      setIsNotesLoading(false);
    }
  }, [currentQuestion]);

  const handleOpenTutorChat = useCallback(async (question: Question, userAnswers: string[]) => {
    if (!process.env.API_KEY) {
      setTutorError("API_KEY environment variable not set. The AI Tutor feature cannot be used.");
      setIsTutorOpen(true);
      return;
    }
    
    setTutorQuestion(question);
    setIsTutorOpen(true);
    setIsTutorLoading(true);
    setTutorMessages([]);
    setTutorError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: "You are a world-class CompTIA Security+ (SY0-701) expert tutor. Your primary goal is to help a student deeply understand cybersecurity concepts by analyzing their thought process. Your first response should briefly explain why their answer to a practice question was correct or incorrect. Then, you MUST ask them to explain their reasoning for the choice they made. Based on their explanation, you will adapt your teaching style. If they have a solid foundation, challenge them with advanced concepts. If they are mistaken, gently guide them to the correct understanding using simple analogies and Socratic questioning. Your tone should be encouraging and supportive, focusing on guiding them to discover the answer themselves."
        }
      });
      setActiveChat(chat);

      const userChoiceText = userAnswers.map(ua => {
        const option = question.options.find(o => o.label === ua);
        return `'${ua}: ${option?.text}'`;
      }).join(' and ');

      const correctChoiceText = question.answer.map(ca => {
        const option = question.options.find(o => o.label === ca);
        return `'${ca}: ${option?.text}'`;
      }).join(' and ');
      
      const initialPrompt = `I'm studying for the CompTIA Security+ exam and just answered a question. ` +
        `The question was: "${question.question}". ` +
        `The correct answer is ${correctChoiceText}. ` +
        `I chose ${userChoiceText}. ` +
        `First, briefly explain why my answer was correct or incorrect. Then, ask me this exact question: "Why did you select ${userChoiceText}?"`;


      const responseStream = await chat.sendMessageStream({ message: initialPrompt });

      setIsTutorLoading(false);
      let currentMessage = '';
      setTutorMessages([{ role: 'model', parts: [{ text: '' }] }]);
      for await (const chunk of responseStream) {
        currentMessage += chunk.text;
        setTutorMessages([{ role: 'model', parts: [{ text: currentMessage }] }]);
      }
    } catch (error) {
      console.error("Error with AI Tutor Chat:", error);
      setTutorError("Sorry, an error occurred while starting the chat. Please try again later.");
      setIsTutorLoading(false);
    }
  }, []);

  const handleTutorSendMessage = useCallback(async (message: string) => {
    if (!activeChat) return;

    setTutorMessages(prev => [...prev, { role: 'user', parts: [{ text: message }] }]);
    setIsTutorLoading(true);
    setTutorError(null);

    try {
      const responseStream = await activeChat.sendMessageStream({ message });
      
      let fullResponse = "";
      setTutorMessages(prev => [...prev, { role: 'model', parts: [{ text: fullResponse }] }]);

      for await (const chunk of responseStream) {
        fullResponse += chunk.text;
        setTutorMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].parts[0].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message to AI Tutor:", error);
      setTutorError("Sorry, an error occurred while sending your message. Please try again.");
    } finally {
      setIsTutorLoading(false);
    }
  }, [activeChat]);
  
  const handleSelectAnswer = (optionLabel: string) => {
    if (!currentQuestion || isSubmitted) return;
    
    if (currentQuestion.isMultipleChoice) {
      setSelectedAnswers(prev => 
        prev.includes(optionLabel)
          ? prev.filter(label => label !== optionLabel)
          : [...prev, optionLabel]
      );
    } else {
      setSelectedAnswers([optionLabel]);
    }
  };
  
  const handleCloseTutorChat = useCallback(() => setIsTutorOpen(false), []);
  const handleCloseNotesModal = useCallback(() => setIsNotesModalOpen(false), []);

  const renderQuizContent = () => {
    switch (quizState) {
      case 'reviewing':
        return <ReviewSheet questions={incorrectlyAnsweredQuestions} onBackToCompletion={() => setQuizState('completed')} />;
      
      case 'completed':
        const finalScore = sessionHistory[0]?.score ?? currentScore;
        const finalTotal = sessionHistory[0]?.totalPossible ?? totalPossibleScore;
        return (
          <div className="text-center bg-surface rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in border border-tertiary/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{quizModeText[quizMode]} Complete!</h2>
            {quizMode === 'cert-simulation' && finalTime !== null && (
                <div className="text-lg mb-4">
                    <p className="font-semibold text-text-secondary">Time Taken</p>
                    <p className="font-mono text-3xl font-bold text-primary">{formatDuration(finalTime)}</p>
                </div>
            )}
            <p className="text-lg text-text-secondary mb-6">Here's how you did:</p>
            <SessionStats completed={questionsCompleted} score={finalScore} totalPossibleScore={finalTotal} />
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <button onClick={() => setQuizState('setup')} className="w-full sm:w-auto px-6 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">
                &larr; Back to Menu
              </button>
              {incorrectlyAnsweredQuestions.length > 0 && (
                <>
                  <button onClick={() => setQuizState('reviewing')} className="w-full sm:w-auto px-6 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">
                    Review Incorrect
                  </button>
                  <button onClick={startRedoIncorrectSession} className="w-full sm:w-auto px-6 py-3 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors">
                    Redo {incorrectlyAnsweredQuestions.length} Incorrect
                  </button>
                </>
              )}
            </div>
          </div>
        );

      case 'active':
        return (
          <>
            <SessionStats completed={questionsCompleted} score={currentScore} totalPossibleScore={totalPossibleScore} />
            {currentQuestion && (
              <>
                {quizMode === 'cert-simulation' && <TimerDisplay secondsRemaining={timer} />}
                {!isSubmitted ? (
                  <QuestionCard
                    question={currentQuestion}
                    selectedAnswers={selectedAnswers}
                    onSelectAnswer={handleSelectAnswer}
                    onSubmit={handleSubmit}
                    currentQuestionNumber={currentQuestionIndex + 1}
                    totalQuestions={activeQuestions.length}
                  />
                ) : (
                  <AnswerCard
                    question={currentQuestion}
                    userAnswers={selectedAnswers}
                    onNextQuestion={handleNextQuestion}
                    wasAnswerCorrect={wasCurrentAnswerCorrect}
                    currentQuestionNumber={currentQuestionIndex + 1}
                    totalQuestions={activeQuestions.length}
                    onGetNotes={handleGetNotes}
                    onOpenTutorChat={() => handleOpenTutorChat(currentQuestion, selectedAnswers)}
                  />
                )}
              </>
            )}
          </>
        );
      
      case 'setup':
      default:
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-2">Choose Your Session Type:</h2>
                <p className="text-text-secondary">Total questions in pool: {questions.length}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* All Questions Card */}
              <div className="bg-surface p-6 rounded-xl shadow-lg border border-tertiary/50 flex flex-col transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-primary mb-2">All Questions</h3>
                <p className="text-text-secondary mb-6 flex-grow">Tackle the full question bank. Choose 'Sequential' to go through them in order, or 'Random' for a shuffled experience.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button onClick={() => startNewSession('sequential')} className="w-full sm:w-auto flex-1 px-4 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">Sequential</button>
                  <button onClick={() => startNewSession('random')} className="w-full sm:w-auto flex-1 px-4 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">Random</button>
                </div>
              </div>
              
              {/* Quickie Quizzes Card */}
              <div className="bg-surface p-6 rounded-xl shadow-lg border border-tertiary/50 flex flex-col transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-primary mb-2">Quickie Quizzes</h3>
                <p className="text-text-secondary mb-6 flex-grow">Perfect for a focused study burst. Choose from a 25 or 50 question randomized quiz.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button onClick={() => startNewSession('quick')} className="w-full sm:w-auto flex-1 px-4 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">25 Questions</button>
                  <button onClick={() => startNewSession('quick-50')} className="w-full sm:w-auto flex-1 px-4 py-3 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors">50 Questions</button>
                </div>
              </div>
            </div>

            {/* Cert Sim Card */}
            <div className="bg-surface p-6 rounded-xl shadow-lg border border-tertiary/50 transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-primary mb-2">Certification Simulation</h3>
              <p className="text-text-secondary mb-6">Test your knowledge under pressure with a full-length, 90-question timed exam that mirrors the real thing.</p>
              <button onClick={() => startNewSession('cert-simulation')} className="w-full px-6 py-4 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors text-lg">
                Start Certification Simulation
              </button>
            </div>

            {sessionHistory.length > 0 && (
              <div className="bg-surface p-6 sm:p-8 rounded-xl shadow-lg border border-tertiary/50">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-text-primary">Recent Sessions</h3>
                    <button onClick={clearHistory} className="text-sm font-semibold text-red-400 hover:text-red-500 transition-colors">Clear All</button>
                </div>
                <ul className="space-y-3">
                  {sessionHistory.map((session, index) => {
                    const percentage = session.totalPossible > 0 ? Math.round((session.score / session.totalPossible) * 100) : 0;
                    return (
                      <li key={index} className="p-3 bg-background rounded-lg flex justify-between items-center text-sm">
                        <div>
                          <p className="font-bold text-text-primary">{session.mode}</p>
                          <p className="text-text-secondary">{session.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold text-lg ${percentage >= 80 ? 'text-correct' : 'text-incorrect'}`}>{percentage}%</p>
                          <p className="text-text-secondary">({session.score}/{session.totalPossible} pts) {session.timeTaken ? ` - ${session.timeTaken}` : ''}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
    }
  };
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            a.r.yvnce's Sec+ (sy0-701) Study Quiz
          </h1>
        </header>
        
        {renderQuizContent()}

        <footer className="text-center mt-8 text-sm text-text-secondary no-print">
          <p>Thank you for using the Study Assistant. Good luck with your exam!</p>
        </footer>
      </div>
      <NotesModal
        isOpen={isNotesModalOpen}
        onClose={handleCloseNotesModal}
        isLoading={isNotesLoading}
        notesText={notesResult}
        error={notesError}
      />
      <AITutorChat
        isOpen={isTutorOpen}
        onClose={handleCloseTutorChat}
        messages={tutorMessages}
        onSendMessage={handleTutorSendMessage}
        isLoading={isTutorLoading}
        error={tutorError}
        question={tutorQuestion}
      />
    </main>
  );
};

export default App;