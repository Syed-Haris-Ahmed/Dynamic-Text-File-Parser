import React, { useState } from 'react'
import './ActivityView.css'
import InputField from "./field-components/InputField"
import SelectField from "./field-components/SelectField"
import CreateIcon from '@mui/icons-material/Create'
import VerticalAlignCenterRoundedIcon from '@mui/icons-material/VerticalAlignCenterRounded'
import EditableTable from "./field-components/EditableTable"
import ActionButtons from "./field-components/ActionButtons"
import UploadFileIcon from '@mui/icons-material/UploadFile'
import DownloadIcon from '@mui/icons-material/Download'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

const menuItems = [
    { value: 0, label: "CSV" },
    { value: 1, label: "Fixed Length" }
]

function ConfigView() {
    const [rows, setRows] = useState([
        // Initial rows data if any
    ])

    const handleUploadConfig = () => {
        console.log("Rows -> ")
        rows.map (row => {
            console.log(row.index + " - " + row.name + " - " + row.type)
        })
    }

    return (
        <div>
            <div className="view-container config-container">
                <InputField text="Configuration Name" icon={<CreateIcon />} />
                <SelectField menuItems={menuItems} text="Configuration Type" />
                <InputField text="Delimiter" icon={<VerticalAlignCenterRoundedIcon />} iconSx={{ transform: 'rotate(90deg)' }} />
            </div>

            <div className="process-container">
                <div className="table-container">
                    <EditableTable rows={rows} setRows={setRows} />
                </div>

                <div className="process-buttons-container">
                    <div className="grid-element">
                        <ActionButtons variant="outlined" text="Upload Config" icon={<UploadFileIcon />} />
                    </div>

                    <div className="grid-element">
                        <ActionButtons variant="outlined" text="Download Config" icon={<DownloadIcon />} onClick={handleUploadConfig} />
                        <ActionButtons variant="contained" text="Save Config to DB" icon={<CloudUploadOutlinedIcon />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigView
