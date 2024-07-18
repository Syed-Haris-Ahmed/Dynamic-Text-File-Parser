import React from "react"
import './NavBar.css'

function NavBarButton(props) {
    return (
        <div className='nav-bar-button' onClick={props.onClick}>
            <img className="nav-bar-button-icon" src={props.iconURL} alt={props.alt} />           
            <div className="nav-bar-button-text">{props.text}</div>
        </div>
    )
}

export default NavBarButton