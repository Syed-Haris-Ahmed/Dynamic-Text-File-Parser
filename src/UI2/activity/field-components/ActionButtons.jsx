import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import './Fields.css'

export default function ActionButtons(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant={props.variant} 
        startIcon={props.icon} 
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </Stack>
  )
}
