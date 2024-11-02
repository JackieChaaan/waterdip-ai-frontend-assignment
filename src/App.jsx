import './App.css';
import { ThemeProvider } from './components/context/ThemeContext';
import Dashboard from './components/Dashboard';


const App = () => {

  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
