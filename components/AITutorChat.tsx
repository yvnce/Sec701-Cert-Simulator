import React, { useRef, useEffect } from 'react';
import type { Question, ChatMessage } from '../types';
import XIcon from '../constants/icons/XIcon';
import FormattedText from './common/FormattedText';

interface AITutorChatProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error: string | null;
  question: Question | null;
}

const AITutorChat: React.FC<AITutorChatProps> = ({ isOpen, onClose, messages, onSendMessage, isLoading, error, question }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;
    if (message.trim()) {
      onSendMessage(message.trim());
      formRef.current?.reset();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 no-print" aria-modal="true" role="dialog">
      <div className="bg-surface rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col animate-fade-in border border-tertiary/50">
        <header className="flex items-center justify-between p-4 border-b border-tertiary">
          <h2 className="text-xl font-bold text-text-primary">AI Tutor</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-tertiary transition-colors" aria-label="Close chat">
            <XIcon className="w-6 h-6 text-text-secondary" />
          </button>
        </header>

        {question && (
          <div className="p-4 border-b border-tertiary bg-background/50 flex-shrink-0">
              <p className="text-sm font-semibold text-text-secondary mb-1">RE: Original Question</p>
              <p className="text-base font-medium text-text-primary">{question.question}</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-primary text-text-on-primary rounded-br-lg'
                    : 'bg-tertiary text-text-primary rounded-bl-lg'
                }`}
              >
                <FormattedText text={msg.parts[0].text} />
              </div>
            </div>
          ))}
          {isLoading && messages.length > 0 && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-2xl bg-tertiary text-text-primary rounded-bl-lg">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
          {isLoading && messages.length === 0 && (
             <div className="flex justify-center items-center h-full">
                <div className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <span className="ml-2 font-semibold">Tutor is thinking...</span>
                </div>
             </div>
          )}
           {error && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-2xl bg-incorrect-subtle-bg border border-incorrect text-incorrect">
                <strong className="font-bold">Error:</strong> {error}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <footer className="p-4 border-t border-tertiary">
          <form ref={formRef} onSubmit={handleFormSubmit} className="flex items-center gap-2">
            <input
              type="text"
              name="message"
              placeholder={isLoading ? "Waiting for response..." : "Ask a follow-up question..."}
              autoComplete="off"
              disabled={isLoading}
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-tertiary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              aria-label="Your message to the AI Tutor"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-primary text-text-on-primary font-bold rounded-lg hover:bg-mint-green/80 transition-colors disabled:bg-tertiary disabled:cursor-not-allowed disabled:text-text-secondary"
            >
              Send
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AITutorChat;