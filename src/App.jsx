import React, { useState } from 'react'
// import './App.css'
import './UI2/UI2.css'
import NavBar from './UI2/nav-bar/NavBar'

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
  return (
    <div className='main-container'>
      <NavBar/>
    </div>
  )
}

export default App
