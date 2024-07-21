import React, { useState } from 'react'
import './UI2/UI2.css'
import NavBar from './UI2/nav-bar/NavBar'
import ActivityView from './UI2/activity/ActivityView'

function App() {
  const [optionStatus, setOptionStatus] = useState('config')

  const handleOptionChange = (option) => {
    setOptionStatus(option)
  }

  return (
    <div className='main-container'>
      <div className='background'></div>
      <NavBar onOptionChange={handleOptionChange} />
      <ActivityView activity={optionStatus} />
    </div>
  )
}

export default App
