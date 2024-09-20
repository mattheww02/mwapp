import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


import Navigation from './components/Navigation';
import MyButton from './components/MyButon';
import MyCard from './components/MyCard';
import MyGrid from './components/MyGrid';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <MyButton text={isDarkMode ? 'Light Mode' : 'Dark Mode'} onClick={toggleDarkMode}/> 
      <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;