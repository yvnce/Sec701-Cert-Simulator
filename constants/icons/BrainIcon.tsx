import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v1.2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5A2.5 2.5 0 0 1 14.5 2"/>
      <path d="M16 8a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"/>
      <path d="M12 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5Z"/>
      <path d="M8 8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"/>
      <path d="M12 22a8 8 0 0 0 8-8V9a1 1 0 0 0-1-1h-2.5a.5.5 0 0 1-.5-.5V4.5A2.5 2.5 0 0 0 13.5 2h-3A2.5 2.5 0 0 0 8 4.5V7a.5.5 0 0 1-.5.5H5a1 1 0 0 0-1 1v5a8 8 0 0 0 8 8Z"/>
    </svg>
);

export default BrainIcon;