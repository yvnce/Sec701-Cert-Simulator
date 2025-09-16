import React from 'react';
import type { Question } from '../types';
import CheckIcon from '../constants/icons/CheckIcon';
import XIcon from '../constants/icons/XIcon';
import OptionDisplay from './common/OptionDisplay';
import NotebookIcon from '../constants/icons/NotebookIcon';
import BrainIcon from '../constants/icons/BrainIcon';

interface AnswerCardProps {
  question: Question;
  userAnswers: string[];
  onNextQuestion: () => void;
  wasAnswerCorrect: boolean;
  currentQuestionNumber: number;
  totalQuestions: number;
  onGetNotes: () => void;
  onOpenTutorChat: () => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({ question, userAnswers, onNextQuestion, wasAnswerCorrect, currentQuestionNumber, totalQuestions, onGetNotes, onOpenTutorChat }) => {
  const questionsRemaining = totalQuestions - currentQuestionNumber;

  return (
    <div className="bg-surface rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in border border-tertiary/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-semibold text-primary mb-2">
            Question {currentQuestionNumber} of {totalQuestions} ({questionsRemaining} left)
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary whitespace-pre-wrap">{question.question}</h2>
        </div>
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold ${wasAnswerCorrect ? 'bg-correct-subtle-bg text-correct' : 'bg-incorrect-subtle-bg text-incorrect'}`}>
          {wasAnswerCorrect ? <CheckIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5" />}
          <span>{wasAnswerCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
      </div>
      
      <div className="space-y-4 my-6">
        {question.options.map((option) => (
          <OptionDisplay
            key={option.label}
            option={option}
            question={question}
            userAnswers={userAnswers}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-background/50 rounded-lg space-y-6">
        <div>
          <h3 className="text-lg font-bold text-correct mb-2">Explanation</h3>
          <p className="text-text-secondary whitespace-pre-wrap">{question.explanation}</p>
        </div>
        {question.incorrectOptionsExplanation && (
          <div>
            <h3 className="text-lg font-bold text-incorrect mb-2">Why Incorrect Options are Wrong</h3>
            <div className="text-text-secondary space-y-4">
              {question.incorrectOptionsExplanation.split('\n').map((explanation, index) => (
                explanation.trim() && <p key={index}>{explanation}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap justify-end items-center gap-4">
        <button
          onClick={onGetNotes}
          className="flex items-center gap-2 px-6 py-3 bg-tertiary text-text-primary font-bold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface"
          title="Get study notes for this question"
        >
          <NotebookIcon className="w-5 h-5" />
          Notes
        </button>
        <button
          onClick={onOpenTutorChat}
          className="flex items-center gap-2 px-6 py-3 bg-tertiary text-text-primary font-bold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface"
          title="Start an interactive chat with an AI Tutor"
        >
          <BrainIcon className="w-5 h-5" />
          AI Tutor
        </button>
        <button
          onClick={onNextQuestion}
          className="px-8 py-3 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;