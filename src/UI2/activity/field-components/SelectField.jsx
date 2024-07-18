import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

function SelectField(props) {
  const [age, setAge] = React.useState('10')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div>
        <Box sx={{ minWidth: 120 }}>
            <InputLabel 
                id="demo-simple-select-label"
                sx={{
                    color: 'white', // Label color
                    '&.Mui-focused': { color: '#00e9a2' }, // Focused label color
                    '&:hover': { color: '#92ffdf' }, // Hover label color
                }}
            >
                Age
            </InputLabel>
        
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                sx={{
                    width: 250,
                    height: 40,
                    overflow: 'hidden',
                    color: 'white',
                    '& .MuiSelect-root': { color: 'white' }, // Text color of the select box
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Border color of the select box
                    '& .MuiSvgIcon-root': { color: 'white' }, // Icon color
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#92ffdf' }, // Hover border color of the select box
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00e9a2' }, // Focused border color of the select box
                }}
                MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#5effd1', // Background color of the menu
                      },
                    },
                    getContentAnchorEl: null,
                }}

                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Box>
    </div> 
  )
}

export default SelectField