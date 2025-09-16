import React from 'react';

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

  const elements: React.ReactNode[] = [];
  let currentListItems: string[] = [];

  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-outside ml-6 space-y-1 my-2">
          {currentListItems.map((item, i) => (
            <li key={i}>{parseInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      currentListItems = [];
    }
  };

  text.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
      currentListItems.push(trimmedLine.substring(2));
    } else {
      flushList(); // End any existing list
      if (trimmedLine.startsWith('# ')) {
        elements.push(<h1 key={elements.length} className="text-2xl font-bold text-secondary-btn-text mt-4 mb-2">{parseInlineFormatting(trimmedLine.substring(2))}</h1>);
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(<h2 key={elements.length} className="text-xl font-bold text-secondary-btn-text mt-3 mb-2">{parseInlineFormatting(trimmedLine.substring(3))}</h2>);
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(<h3 key={elements.length} className="text-lg font-bold text-secondary-btn-text mt-2 mb-2">{parseInlineFormatting(trimmedLine.substring(4))}</h3>);
      } else if (trimmedLine) {
        elements.push(<p key={elements.length}>{parseInlineFormatting(trimmedLine)}</p>);
      }
    }
  });

  flushList(); // Add any remaining list items at the end

  return (
    <div className="space-y-3 text-secondary-btn-text/90 whitespace-normal leading-relaxed">
      {elements}
    </div>
  );
};

export default FormattedText;