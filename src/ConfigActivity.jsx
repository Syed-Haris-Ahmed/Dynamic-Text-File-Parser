import React from 'react'
import './App.css'
import InputField from './InputField'
import SelectBox from './SelectBox';

const options = [
    { value: '1', label: 'CSV' },
    { value: '2', label: 'Fixed Length' },
    { value: '3', label: 'Other' },
];

function ConfigActivity() {
    return (
        <div className='config-activity'>
            <InputField text = {"Configuration Name"}/>
            <SelectBox options = {options} />
            <InputField text = {"Delimiter"}/>
            <InputField text = {"Column Name"}/>
            <InputField text = {"Add Column"}/>
            <InputField text = {"Save Configuration"}/>
        </div>
    )
}

export default ConfigActivity