
import React from 'react';
import ClockIcon from '../constants/icons/ClockIcon';

const formatTime = (totalSeconds: number): string => {
  const isNegative = totalSeconds < 0;
  const absSeconds = Math.abs(totalSeconds);
  const minutes = Math.floor(absSeconds / 60);
  const seconds = absSeconds % 60;
  
  return `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

interface TimerDisplayProps {
  secondsRemaining: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ secondsRemaining }) => {
  const isNegative = secondsRemaining < 0;
  const sixtySecondsWarning = secondsRemaining <= 60 && secondsRemaining > 0;
  
  let bgColor = 'bg-surface';
  let textColor = 'text-text-primary';

  if (isNegative) {
    bgColor = 'bg-incorrect/20';
    textColor = 'text-incorrect';
  } else if (sixtySecondsWarning) {
    bgColor = 'bg-yellow-500/20';
    textColor = 'text-yellow-300';
  }

  return (
    <div className={`mb-4 p-3 rounded-lg text-center shadow-md animate-fade-in border border-tertiary/50 ${bgColor} ${textColor} transition-colors duration-500`}>
      <div className="flex items-center justify-center gap-3" aria-label={`Time Remaining: ${formatTime(secondsRemaining)}`}>
        <ClockIcon className="w-7 h-7" />
        <span className="font-mono text-2xl font-bold" aria-hidden="true">{formatTime(secondsRemaining)}</span>
      </div>
    </div>
  );
};

export default TimerDisplay;