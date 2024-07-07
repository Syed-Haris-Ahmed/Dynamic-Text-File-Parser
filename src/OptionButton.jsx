import React from 'react'
import './App.css'

function OptionButton(props) {
    return (
        <button className='option-button' onClick={props.onClick}>{props.text}</button>
    )
}

export default OptionButton