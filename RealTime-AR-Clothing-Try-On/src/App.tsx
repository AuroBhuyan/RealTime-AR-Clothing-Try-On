// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WebcamFeed from './pages/WebcamFeed';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/try-on" element={<WebcamFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
