import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedMode);
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode);
    };
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Header /> 
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;