// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Custom styles and Tailwind CSS imports
import Cursor from './components/Cursor'; // Custom Cursor component
import Hero from './components/Hero';
import MainContent from './components/MainContent'; // New component for other sections
import NotFound from './components/NotFound'; // 404 Page Component

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/main-content" element={<MainContent />} />
      </Routes>
      </div>
      </Router>
        );
};

export default App;
