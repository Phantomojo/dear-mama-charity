import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemoryLane from './pages/MemoryLane';
import DailyLoveLetters from './pages/DailyLoveLetters';
import WhyWeLoveMum from './pages/WhyWeLoveMum';
import MusicForMama from './pages/MusicForMama';
import FinalMessage from './pages/FinalMessage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/memory-lane">Memory Lane</Link></li>
            <li><Link to="/daily-love-letters">Daily Love Letters</Link></li>
            <li><Link to="/why-we-love-mum">Why We Love Mum</Link></li>
            <li><Link to="/music-for-mama">Music for Mama</Link></li>
            <li><Link to="/final-message">Final Message</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/memory-lane" element={<MemoryLane />} />
            <Route path="/daily-love-letters" element={<DailyLoveLetters />} />
            <Route path="/why-we-love-mum" element={<WhyWeLoveMum />} />
            <Route path="/music-for-mama" element={<MusicForMama />} />
            <Route path="/final-message" element={<FinalMessage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
