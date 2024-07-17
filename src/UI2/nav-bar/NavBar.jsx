import React from "react"
import './NavBar.css'
import NavBarButton from "./NavBarButton"
import configIcon from "./assets/config-icon.svg"
import parseFileIcon from "./assets/parse-file-icon.svg"
import searchIcon from "./assets/search-icon.svg"

function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="activity-options">
                <NavBarButton text = "Configuration" iconURL = {configIcon} alt = "Configuration Icon"/>
                <NavBarButton text = "Parse File" iconURL = {parseFileIcon} alt = "Parse File Icon"/>
                <NavBarButton text = "Search" iconURL = {searchIcon} alt = "Search Icon"/>
            </div>

            <div className="settings-options">
                <NavBarButton text = "Configuration" iconURL = {searchIcon} alt = "Configuration Icon"/>
            </div>
        </div>
    )
}

export default NavBar