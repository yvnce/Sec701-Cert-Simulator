import React from 'react';
import type { IncorrectlyAnsweredQuestion, Option } from '../types';
import OptionDisplay from './common/OptionDisplay';

interface ReviewSheetProps {
  questions: IncorrectlyAnsweredQuestion[];
  onBackToCompletion: () => void;
}

const ReviewSheet: React.FC<ReviewSheetProps> = ({ questions, onBackToCompletion }) => {
  
  return (
    <div className="bg-surface rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in border border-tertiary/50">
      <div className="flex justify-between items-center mb-6 no-print">
        <h2 className="text-2xl font-bold text-text-primary">Incorrect Answers Review</h2>
        <div className="flex space-x-4">
          <button
            onClick={onBackToCompletion}
            className="px-6 py-2 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors"
          >
            &larr; Back to Results
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors"
          >
            Print
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((item, index) => (
          <div key={item.id} className="printable-card bg-background/50 rounded-lg p-6 border border-tertiary/50">
            <p className="text-sm font-semibold text-primary mb-2">
              Question #{index + 1} (Original ID: {item.id})
            </p>
            <h3 className="text-xl font-bold text-text-primary mb-4 whitespace-pre-wrap">{item.question}</h3>
            
            <div className="space-y-3 my-4">
              {item.options.map((option: Option) => (
                <OptionDisplay
                  key={option.label}
                  option={option}
                  question={item}
                  userAnswers={item.userAnswers}
                />
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-md font-bold text-correct mb-1">Explanation</h4>
                <p className="text-text-secondary whitespace-pre-wrap text-sm">{item.explanation}</p>
              </div>
              {item.incorrectOptionsExplanation && (
                <div>
                  <h4 className="text-md font-bold text-incorrect mb-1">Why Incorrect Options are Wrong</h4>
                  <div className="text-text-secondary space-y-2 text-sm">
                    {item.incorrectOptionsExplanation.split('\n').map((explanation, idx) => (
                      explanation.trim() && <p key={idx}>{explanation}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSheet;