import React from 'react'
import ThemeButton from './ThemeButton'
import './Header.scss'

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className='container'>
      <div className="heading">
      <h1>RESORT HOTEL</h1>
      <h4>Visitors Data</h4>
      </div>
      <div className="themeButton">
        <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
    </header>
  )
}

export default Header
