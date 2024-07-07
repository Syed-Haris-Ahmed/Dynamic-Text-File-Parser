import React from 'react';
import './App.css';

function SelectBox(props) {
    return (
        <div className='input-field'>
            <select name="file_type" id="file_type">
                {
                    props.options.map((option, index) => (
                        <option key = {index} value = {option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            <div className='input-border'></div>
        </div>
    );
}

export default SelectBox;
