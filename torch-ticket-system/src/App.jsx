import './App.css'

import { Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import tech_logo from './assets/logos/techLogo.png'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='underline'></div>
      <img className="tech-logo" src={tech_logo} alt="Capital Tech" />
    </div>
  )
}

export default App
