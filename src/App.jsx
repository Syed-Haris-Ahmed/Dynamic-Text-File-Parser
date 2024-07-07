import React, { useState } from 'react'
import './App.css'
import OptionBar from './OptionBar'
import ActivityBar from './ActivityBar'

function App() {
  const [optionStatus, setOptionStatus] = useState('config')

  const handleOptionChange = (option) => {
    setOptionStatus(option)
  }

  return (
    <div className='main-container'>
      <div className='child-container'>
        <OptionBar onOptionChange = {handleOptionChange} />
        <ActivityBar activity = {optionStatus} />
      </div>
    </div>
  )
}

export default App
