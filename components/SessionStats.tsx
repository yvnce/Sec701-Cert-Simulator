import React from 'react';
import BrainIcon from '../constants/icons/BrainIcon';

interface SessionStatsProps {
  completed: number;
  score: number;
  totalPossibleScore: number;
}

const SessionStats: React.FC<SessionStatsProps> = ({ completed, score, totalPossibleScore }) => {
  const percentage = totalPossibleScore > 0 ? Math.round((score / totalPossibleScore) * 100) : 0;
  const targetFor80 = totalPossibleScore > 0 ? Math.ceil(totalPossibleScore * 0.8) : 0;

  return (
    <div className="mb-8 p-4 bg-surface rounded-xl border border-tertiary/50 shadow-sm animate-fade-in">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        
        <div className="p-4 rounded-lg bg-background/50">
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Completed</p>
          <p className="text-3xl font-bold text-text-primary">{completed}</p>
        </div>

        <div className="p-4 rounded-lg bg-background/50">
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Points</p>
          <p className="text-3xl font-bold text-correct">{score}</p>
        </div>

        <div className="p-4 rounded-lg bg-background/50">
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Score</p>
            <p className="text-3xl font-bold text-primary">{percentage}%</p>
        </div>

        <div className="p-4 rounded-lg bg-background/50">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-text-secondary uppercase tracking-wider" title="The number of points needed to achieve an 80% score for the completed questions.">
            <BrainIcon className="w-4 h-4" />
            <span>80% Target (Pts)</span>
          </div>
          <p className="text-3xl font-bold text-text-primary">{targetFor80}</p>
        </div>
      </div>
    </div>
  );
};

export default SessionStats;