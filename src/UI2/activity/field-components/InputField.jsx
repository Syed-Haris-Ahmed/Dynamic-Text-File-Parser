import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import './Fields.css'

function InputField(props) {
  return (
      <div>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                '&:focus-within .MuiSvgIcon-root': {
                  color: '#00e9a2', // Change this to your desired focus color
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#00e9a2', // Change this to your desired focus color
                },
              }}
        >
            <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label={props.text}
              variant="standard"
              sx={{
                '& .MuiInputLabel-root': { color: 'white' }, // Label color
                '&:hover .MuiInputLabel-root': { color: '#92ffdf' }, // Label hover color
                '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' }, // Focused label color
                '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' }, // Focused label hover color
                '& .MuiInputBase-root': { color: 'white' }, // Input text color
                '& .MuiInputBase-input:hover': { color: '#92ffdf' }, // Input text hover color
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' }, // Underline hover color
                '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color when not focused
                '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' }, // Underline color when focused
              }}
            />
        </Box>
      </div>
  )
}

export default InputField