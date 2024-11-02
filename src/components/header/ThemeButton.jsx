import React from 'react';
import './ThemeButton.scss'

const ThemeButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} className='theme-btn'>
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeButton;

