import React from 'react';
import useScrollRotate from '../hooks/useScrollRotate';
import '../index.css';

const ScrollRotateButton = () => {
  const rotation = useScrollRotate();

  const goToContact = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="scroll-rotate-button"
      onClick={goToContact}
      aria-label="Go to contact section"
      type="button"
    >
      <svg
        className="scroll-rotate-text"
        viewBox="0 0 100 100"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="scrollTextPath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>

        <text>
          <textPath href="#scrollTextPath" startOffset="0%">
            S C R O L L - D O W N 
          </textPath>
        </text>
      </svg>

      <span className="scroll-rotate-icon">↓</span>
    </button>
  );
};

export default ScrollRotateButton;