import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const pauseTime = 2000; // Time to pause before deleting

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        // Reset for next cycle
        setIsDeleting(false);
        setCurrentIndex(0);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText; 