import React from 'react';
import XIcon from '../constants/icons/XIcon';
import NotebookIcon from '../constants/icons/NotebookIcon';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  notesText: string;
  error: string | null;
}

const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const parseInlineFormatting = (line: string) => {
    // This regex should handle bold, italic, and bold-italic
    const parts = line.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('***') && part.endsWith('***')) {
        return <strong key={index}><em className="italic">{part.slice(3, -3)}</em></strong>;
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="italic">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const addListToElements = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-outside ml-6 space-y-1">
          {currentList.map((item, i) => (
            <li key={i}>{parseInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
      currentList.push(trimmedLine.substring(2));
    } else {
      addListToElements();
      if (trimmedLine.startsWith('# ')) {
        elements.push(
          <h1 key={elements.length} className="text-2xl font-bold text-primary mt-4 mb-2">
            {parseInlineFormatting(trimmedLine.substring(2))}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={elements.length} className="text-xl font-bold text-primary mt-4 mb-2">
            {parseInlineFormatting(trimmedLine.substring(3))}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={elements.length} className="text-lg font-bold text-primary mt-4 mb-2">
            {parseInlineFormatting(trimmedLine.substring(4))}
          </h3>
        );
      } else if (trimmedLine) {
        elements.push(<p key={elements.length}>{parseInlineFormatting(trimmedLine)}</p>);
      }
    }
  });
  addListToElements(); // Add any remaining list items at the end

  return (
    <div className="space-y-3 text-primary/90 whitespace-normal leading-relaxed">
      {elements}
    </div>
  );
};


const NotesModal: React.FC<NotesModalProps> = ({ isOpen, onClose, isLoading, notesText, error }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 no-print" aria-modal="true" role="dialog">
      <div className="bg-dominant rounded-2xl shadow-2xl w-full max-w-2xl h-auto max-h-[85vh] flex flex-col animate-fade-in">
        <header className="flex items-center justify-between p-4 border-b border-secondary flex-shrink-0">
          <div className="flex items-center gap-2">
            <NotebookIcon className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-primary">Study Notes</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Close modal">
            <XIcon className="w-6 h-6 text-primary/70" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {isLoading && (
            <div className="flex justify-center items-center h-48">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse"></div>
                <span className="ml-2 font-semibold">Generating your notes...</span>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {!isLoading && !error && notesText && (
            <FormattedText text={notesText} />
          )}
        </div>
        
        <footer className="p-4 border-t border-secondary flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dominant"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NotesModal;
