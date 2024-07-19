import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './Fields.css'

function InputField(props) {
  return (
      <div>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                '&:focus-within .MuiSvgIcon-root': {
                  color: '#00e9a2',
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#00e9a2',
                },
              }}
        >
            {React.cloneElement(props.icon, { sx: { color: 'white', mr: 1, my: 0.5 } })}
            <TextField
              id="input-with-sx"
              label={props.text}
              variant="standard"
              sx={{
                '& .MuiInputLabel-root': { color: 'white' },
                '&:hover .MuiInputLabel-root': { color: '#92ffdf' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#00e9a2' },
                '& .MuiInputLabel-root.Mui-focused:hover:': { color: '#00e9a2' },
                '& .MuiInputBase-root': { color: 'white' },
                '& .MuiInputBase-input:hover': { color: '#92ffdf' },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#dcfff5' },
                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                '& .MuiInput-underline:after': { borderBottomColor: '#00e9a2' },
              }}
            />
        </Box>
      </div>
  )
}

export default InputField
