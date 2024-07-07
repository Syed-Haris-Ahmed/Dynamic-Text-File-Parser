import React from "react"
import './App.css'

function InputField(props) {
    return (
        <div className="input-field">
            <input type="text" placeholder={props.text} onChange={props.onChange} />
            <div className="input-border"></div>
        </div>
    )
}

export default InputField