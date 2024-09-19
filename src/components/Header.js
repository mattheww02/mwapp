import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Matthew Wight</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
// const [isDarkMode, setIsDarkMode] = useState(false);

// return (
//   <button onClick={() => setIsDarkMode(!isDarkMode)}>
//     Toggle Dark Mode
//   </button>
// );

export default Header;