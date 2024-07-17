import React from 'react'
import './App.css'
import ConfigActivity from '../ConfigActivity'
import FileParserActivity from './FileParserActivity'

function ActivityBar(props) {
    return (
        <div className='activity-bar'>
            {props.activity == 'config' ? <ConfigActivity/> : <FileParserActivity/>}
        </div>
    )
}

export default ActivityBar