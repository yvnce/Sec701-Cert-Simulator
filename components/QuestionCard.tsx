import React from 'react';
import type { Question, Option } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onSelectAnswer: (optionLabel: string) => void;
  onSubmit: () => void;
  currentQuestionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswers, onSelectAnswer, onSubmit, currentQuestionNumber, totalQuestions }) => {
  const questionsRemaining = totalQuestions - currentQuestionNumber;
  return (
    <div className="bg-surface rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in border border-tertiary/50">
      <p className="text-sm font-semibold text-primary mb-2">
        Question {currentQuestionNumber} of {totalQuestions} ({questionsRemaining} left)
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 whitespace-pre-wrap">{question.question}</h2>
      
      <div className="space-y-4">
        {question.options.map((option: Option) => {
          const isSelected = selectedAnswers.includes(option.label);
          return (
            <button
              key={option.label}
              onClick={() => onSelectAnswer(option.label)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start space-x-4 ${
                isSelected 
                  ? 'bg-primary border-mint-green/80 shadow-lg text-text-on-primary' 
                  : 'bg-tertiary/50 border-tertiary text-text-secondary hover:bg-tertiary hover:border-secondary'
              }`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm ${
                isSelected ? 'bg-background text-text-primary' : 'bg-charcoal text-text-secondary'
              }`}>
                {option.label}
              </div>
              <span className="flex-1">{option.text}</span>
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 flex justify-end">
        <button
          onClick={onSubmit}
          disabled={selectedAnswers.length === 0}
          aria-disabled={selectedAnswers.length === 0}
          className="px-8 py-3 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors disabled:bg-tertiary disabled:cursor-not-allowed disabled:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;