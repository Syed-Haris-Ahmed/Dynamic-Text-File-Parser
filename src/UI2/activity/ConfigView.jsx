import React from "react"
import './ActivityView.css'
import InputField from "./field-components/InputField"
import SelectField from "./field-components/SelectField"
import CreateIcon from '@mui/icons-material/Create'
import EmailIcon from '@mui/icons-material/Email'  // Example of another icon

function ConfigView() {
    return (
        <div className="view-container config-container">
            <InputField text="Configuration Name" icon={<CreateIcon />} />
            <InputField text="Email" icon={<EmailIcon />} />
            <SelectField/>
        </div>
    )
}   

export default ConfigView
