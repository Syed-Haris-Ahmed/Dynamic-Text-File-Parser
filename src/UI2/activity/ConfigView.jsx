import React from "react"
import './ActivityView.css'
import InputField from "./field-components/InputField"
import SelectField from "./field-components/SelectField"

function ConfigView() {
    return (
        <div className="view-container config-container">
            <InputField text = "Config Field 1" />
            <SelectField/>
        </div>
    )
}   

export default ConfigView