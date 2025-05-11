import React, { useState } from 'react';
import './WhyWeLoveMum.css';

const quotes = [
  "We love Mum because she forgives before we apologize.",
  "We love Mum because her hugs heal everything.",
  "We love Mum because she never gave up on us.",
  "We love Mum because she listens with her heart.",
  "We love Mum because her smile lights up the darkest days.",
];

const WhyWeLoveMum = () => {
  const [revealed, setRevealed] = useState(Array(quotes.length).fill(false));

  const toggleReveal = (index) => {
    setRevealed((prev) => {
      const newRevealed = [...prev];
      newRevealed[index] = !newRevealed[index];
      return newRevealed;
    });
  };

  return (
    <div className="why-we-love-mum">
      <h2>Why We Love Mum</h2>
      <ul className="quotes-list">
        {quotes.map((quote, index) => (
          <li
            key={index}
            className={`quote-item ${revealed[index] ? 'revealed' : ''}`}
            onClick={() => toggleReveal(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleReveal(index);
              }
            }}
            role="button"
            aria-pressed={revealed[index]}
          >
            {revealed[index] ? quote : 'Click to reveal'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWeLoveMum;
