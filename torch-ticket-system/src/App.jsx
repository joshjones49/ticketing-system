import './App.css'

import { Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Notif from './components/Notifications/Notif'
import Main from './components/Main/Main'

import tech_logo from './assets/logos/techLogo.png'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className='underline'></div>
      <img className="tech-logo" src={tech_logo} alt="Capital Tech" />
      <Notif />
      <Main />
    </div>
  )
}

export default App
