mport React from 'react';
import './DailyLoveLetters.css';

const letters = [
  {
    id: 1,
    title: 'Letter One — Your Strength',
    date: 'May 12, 2025',
    text: "Dear Mum,\nThere were days I was quiet. Days I fought silent battles. But you… you stood tall through it all. You held the storm off with your hands. You never asked for credit. You never needed to. Your presence was the calm. Your strength was the fortress. If I have even a fraction of your resilience, I’ll make it through anything.\n\nLove,\nYour son",
  },
  {
    id: 2,
    title: 'Letter Two — Soft But Steel',
    date: 'May 13, 2025',
    text: "Mama,\nYou are the reason I believe softness isn’t weakness. You loved without limits, but when it was time to rise and protect — you did. You never broke, even when life tried to bend you. You smiled through sacrifices I didn’t even notice as a kid. But now I see. I see it all. And I thank you.\n\nForever,\nYour son",
  },
  {
    id: 3,
    title: 'Letter Three — Lessons Without Words',
    date: 'May 14, 2025',
    text: "Mum,\nYou taught me so much without saying a thing. The way you walk with grace. The way you give without expecting. The way you love, even when tired. That’s the school I learned from. That’s the foundation I stand on. I hope my actions speak back to you the same way yours taught me.\n\nAlways,\nYour boy",
  },
  {
    id: 4,
    title: 'Letter Four — Your Laughter',
    date: 'May 15, 2025',
    text: "Hey Mum,\nYour laughter is a melody. A full song. When you laugh, it’s like the house breathes. Like the sun cracks through the roof. Even when we had little, your joy made us feel rich. Thank you for being the music of my childhood — and the vibe in every room.\n\nLove you endlessly,\nMikey",
  },
  {
    id: 5,
    title: 'Letter Five — We See You',
    date: 'May 16, 2025',
    text: "Mama Charity,\nWe see you. For all the invisible labor. The love that didn’t make it to thank-you speeches. The long nights, short prayers, the food you gave while you skipped meals. We see it now. And we will carry you as you carried us. This love doesn’t expire.\n\nYour son,\nWith a heart full of gratitude",
  },
];

const DailyLoveLetters = () => {
  return (
    <div className="daily-love-letters">
      <h2>Daily Love Letters</h2>
      <div className="letters-container">
        {letters.map(({ id, title, date, text }) => (
          <div key={id} className="letter-card">
            <h3 className="letter-title">{title}</h3>
            <p className="letter-date">{date}</p>
            <p className="letter-text" style={{ whiteSpace: 'pre-line' }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyLoveLetters;
