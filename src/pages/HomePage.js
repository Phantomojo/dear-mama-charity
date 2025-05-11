import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const startJourney = () => {
    navigate('/memory-lane');
  };

  return (
    <div className="home-page">
      <h1 className="title">To Our Pillar — Mama Charity</h1>
      <p className="intro-text">
        This is your space, Mama. A space of gratitude, memory, music, and love. You’ve held us down with grace and lifted us up with strength. We see you. We love you. This is for you.
      </p>
      <button className="start-button" onClick={startJourney}>
        Start the Journey
      </button>
    </div>
  );
};

export default HomePage;
