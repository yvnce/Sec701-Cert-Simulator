import React from 'react';
import type { Question, Option } from '../../types';
import CheckIcon from '../../constants/icons/CheckIcon';
import XIcon from '../../constants/icons/XIcon';

interface OptionDisplayProps {
  option: Option;
  question: Question;
  userAnswers: string[];
}

const getOptionStyle = (optionLabel: string, correctAnswer: string[], userAnswer: string[]) => {
  const isCorrectAnswer = correctAnswer.includes(optionLabel);
  const isSelected = userAnswer.includes(optionLabel);

  if (isCorrectAnswer) {
    return 'bg-correct-subtle-bg border-correct';
  }
  if (isSelected && !isCorrectAnswer) {
    return 'bg-incorrect-subtle-bg border-incorrect';
  }
  return 'bg-tertiary/20 border-tertiary';
};


const OptionDisplay: React.FC<OptionDisplayProps> = ({ option, question, userAnswers }) => {
  const isCorrectAnswer = question.answer.includes(option.label);
  const wasSelectedByUser = userAnswers.includes(option.label);

  return (
    <div
      className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 flex items-start space-x-4 text-text-secondary ${getOptionStyle(option.label, question.answer, userAnswers)}`}
    >
      <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm ${
        isCorrectAnswer ? 'bg-correct text-correct-text' : wasSelectedByUser ? 'bg-incorrect text-incorrect-text' : 'bg-charcoal text-text-secondary'
      }`}>
        {option.label}
      </div>
      <span className="flex-1 text-text-primary">{option.text}</span>
      {wasSelectedByUser && !isCorrectAnswer && <XIcon className="text-incorrect w-6 h-6 flex-shrink-0" />}
      {isCorrectAnswer && <CheckIcon className="text-correct w-6 h-6 flex-shrink-0" />}
    </div>
  );
};

export default OptionDisplay;