import React from 'react';
import XIcon from '../constants/icons/XIcon';
import NotebookIcon from '../constants/icons/NotebookIcon';
import FormattedText from './common/FormattedText';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  notesText: string;
  error: string | null;
}

const NotesModal: React.FC<NotesModalProps> = ({ isOpen, onClose, isLoading, notesText, error }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 no-print" aria-modal="true" role="dialog">
      <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-2xl h-auto max-h-[85vh] flex flex-col animate-fade-in border border-tertiary/50">
        <header className="flex items-center justify-between p-4 border-b border-tertiary flex-shrink-0">
          <div className="flex items-center gap-2">
            <NotebookIcon className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-text-primary">Study Notes</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-tertiary transition-colors" aria-label="Close modal">
            <XIcon className="w-6 h-6 text-text-secondary" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {isLoading && (
            <div className="flex justify-center items-center h-48">
              <div className="flex items-center space-x-2 text-text-primary">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="ml-2 font-semibold">Generating your notes...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-incorrect-subtle-bg border border-incorrect text-incorrect px-4 py-3 rounded-lg" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {!isLoading && !error && notesText && (
            <FormattedText text={notesText} />
          )}
        </div>
        
        <footer className="p-4 border-t border-tertiary flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-tertiary text-text-primary font-semibold rounded-lg hover:bg-light-grey hover:text-base-black transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 focus:ring-offset-surface"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NotesModal;