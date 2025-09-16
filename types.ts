export interface Part {
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: Part[];
}

export interface Option {
  label: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  answer: string[];
  explanation: string;
  incorrectOptionsExplanation: string;
  isMultipleChoice: boolean;
}

export type QuizMode = 'random' | 'sequential' | 'quick' | 'quick-50' | 'cert-simulation';

export const quizModeText: Record<QuizMode, string> = {
    'random': 'Random (All)',
    'sequential': 'Sequential (All)',
    'quick': 'Quick Quiz (25)',
    'quick-50': 'Quick Quiz (50)',
    'cert-simulation': 'Cert Simulation (90)',
};

export interface SessionHistoryEntry {
    mode: string;
    score: number;
    totalPossible: number;
    timeTaken?: string;
    date: string;
}


export type IncorrectlyAnsweredQuestion = Question & { userAnswers: string[] };