import React from 'react'
import './App.css'
import OptionButton from './OptionButton'

function OptionBar(props) {
    return (
        <div className='option-bar'>
            <OptionButton text={"Generate Configuration"} onClick={() => props.onOptionChange('config')} />
            <OptionButton text={"File Parser"} onClick={() => props.onOptionChange('fileParse')} />
        </div>
    )
}

export default OptionBar