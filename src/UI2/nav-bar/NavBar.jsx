import React, { useState } from 'react'
import './NavBar.css'
import NavBarButton from './NavBarButton'
import configIcon from './assets/config-icon.svg'
import configIconSelected from './assets/config-icon-selected.svg'
import parseFileIcon from './assets/parse-file-icon.svg'
import parseFileIconSelected from './assets/parse-file-icon-selected.svg'
import searchIcon from './assets/search-icon.svg'
import searchIconSelected from './assets/search-icon-selected.svg'
import settingsIcon from './assets/settings-icon.svg'
import settingsIconSelected from './assets/settings-icon-selected.svg'
import logoutIcon from './assets/logout-icon.svg'

function NavBar(props) {
    const [selectedOption, setSelectedOption] = useState('config')

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        props.onOptionChange(option)
    }

    return (
        <div className="nav-bar">
            <div className={`selected-option ${selectedOption}`}></div>

            <div className="activity-options">
                <NavBarButton
                    text="Configuration"
                    iconURL={selectedOption === 'config' ? configIconSelected : configIcon}
                    alt="Configuration Icon"
                    onClick={() => handleOptionChange('config')}
                />
                <NavBarButton
                    text="Parse File"
                    iconURL={selectedOption === 'parser' ? parseFileIconSelected : parseFileIcon}
                    alt="Parse File Icon"
                    onClick={() => handleOptionChange('parser')}
                />
                <NavBarButton
                    text="Search"
                    iconURL={selectedOption === 'search' ? searchIconSelected : searchIcon}
                    alt="Search Icon"
                    onClick={() => handleOptionChange('search')}
                />
            </div>

            <div className="setting-options">
                <NavBarButton
                    text="Settings"
                    iconURL={selectedOption === 'settings' ? settingsIconSelected : settingsIcon}
                    alt="Settings Icon"
                    onClick={() => handleOptionChange('settings')}
                />
                <NavBarButton
                    text="Logout"
                    iconURL={logoutIcon}
                    alt="Logout Icon"
                    onClick={() => handleOptionChange('logout')}
                />
            </div>
        </div>
    )
}

export default NavBar
