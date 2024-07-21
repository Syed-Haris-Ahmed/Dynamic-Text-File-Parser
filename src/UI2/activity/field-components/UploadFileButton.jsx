import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import './Fields.css'

export default function UploadFileButton(props) {
  const fileInputRef = React.useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target.result
        if (props.onFileLoad) {
          props.onFileLoad(content)
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button  variant={props.variant} startIcon={props.icon} onClick={handleButtonClick}>
        {props.text}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept=".txt,.csv,.json" // Specify accepted file types
      />
    </Stack>
  )
}
