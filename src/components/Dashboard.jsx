import React, { useState } from 'react'
import FetchData from './data_parse/FetchData'
import ChartContainer from './container/ChartContainer'
import Header from './header/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './Dashboard.scss'



const Dashboard = () => {
  const [data, setData] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  return (

    <div className="dashboard" style={{
      backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#000000',
    }}>
      <header>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </header>
      <main>
        <div className='container'>
          <FetchData setData={setData} />
          <ChartContainer data={data} />
        </div>
      </main>
    </div>

  )
}

export default Dashboard
