import { React, useState } from "react"
import './ActivityView.css'
import TextField from "@mui/material/TextField"
import List from "./List"

function SearchView() {
    const [inputText, setInputText] = useState("")
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    
    return (
        <div className="view-container search-container">
            <div className="search-main-container">
                <h2>Search Data/Configurations</h2>
                <div className="search-bar">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#92ffdf', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00e9a2', // Border color when focused
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white', // Label color
                            },
                            '&:hover .MuiInputLabel-root': {
                                color: '#92ffdf', // Label color
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#00e9a2', // Label color when focused
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'white', // Text color
                            },
                            '&:hover .MuiOutlinedInput-input': {
                                color: '#00e9a2', // Text color
                            },
                        }}
                    />
                </div>
                
                <div className="list-container">
                    <List input={inputText} />
                </div>
            
            </div>
        </div>
    )
}   

export default SearchView