import React, { useState } from 'react'
// import './App.css'
import './UI2/UI2.css'
import NavBar from './UI2/nav-bar/NavBar'
import ActivityView from './UI2/activity/ActivityView'

// import OptionBar from './UI1/OptionBar'
// import ActivityBar from './UI1/ActivityBar'

// function App() {
//   const [optionStatus, setOptionStatus] = useState('config')

//   const handleOptionChange = (option) => {
//     setOptionStatus(option)
//   }

//   return (
//     <div className='main-container'>
//       <div className='child-container'>
//         <OptionBar onOptionChange = {handleOptionChange} />
//         <ActivityBar activity = {optionStatus} />
//       </div>
//     </div>
//   )
// }

function App() {
  const [optionStatus, setOptionStatus] = useState('config')

  const handleOptionChange = (option) => {
    setOptionStatus(option)
  }

  return (
    <div className='main-container'>
      <NavBar onOptionChange = {handleOptionChange} />
      <ActivityView activity = {optionStatus} />
    </div>
  )
}

export default App
