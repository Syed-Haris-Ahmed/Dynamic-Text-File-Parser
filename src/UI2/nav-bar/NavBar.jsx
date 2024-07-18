import React from "react"
import './NavBar.css'
import NavBarButton from "./NavBarButton"
import configIcon from "./assets/config-icon.svg"
import parseFileIcon from "./assets/parse-file-icon.svg"
import searchIcon from "./assets/search-icon.svg"

function NavBar(props) {
    return (
        <div className='nav-bar'>
            <div className="activity-options">
                <NavBarButton text = "Configuration" iconURL = {configIcon} alt = "Configuration Icon" onClick = {() => props.onOptionChange('config')} />
                <NavBarButton text = "Parse File" iconURL = {parseFileIcon} alt = "Parse File Icon" onClick = {() => props.onOptionChange('parser')} />
                <NavBarButton text = "Search" iconURL = {searchIcon} alt = "Search Icon" onClick = {() => props.onOptionChange('search')} />
            </div>

            <div className="setting-options">
                <NavBarButton text = "Configuration" iconURL = {searchIcon} alt = "Configuration Icon" onclick = {() => props.onOptionChange('config')} />
                <NavBarButton text = "Configuration" iconURL = {searchIcon} alt = "Configuration Icon" onclick = {() => props.onOptionChange('config')} />
            </div>
        </div>
    )
}

export default NavBar