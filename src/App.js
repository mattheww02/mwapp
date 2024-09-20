import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import trianglify from 'trianglify';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';
import MyButton from './components/MyButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pattern, setPattern] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  useEffect(() => {
    const newPattern = trianglify({
      cellSize: 50,
      width: window.innerWidth,
      height: window.innerHeight,
      xColors: ['rgba(255, 255, 255, 0.01)', 'rgba(255, 255, 255, 0.1)'],
      yColors: 'match',
    });
    setPattern(newPattern.toCanvas().toDataURL());
  }, []);

  return (
    <div>
      <Router>
        <Navigation />
        <header className="masthead bg-primary text-white text-center" style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'cover' }}>
          <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading text-uppercase mb-0">My Website</h1>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" style={{ width: "500%", maxWidth: "25rem" }}></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0"></p>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <HomePage/>
    </div>
  );
}

export default App;
