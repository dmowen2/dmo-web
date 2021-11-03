import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = () => {
    return (
        <>
        <Nav className = "topNav">
            <NavLink to ="/home" className="topNavLogoLink">
                <h1>Home</h1>
            </NavLink>
            <Bars className = "topBars"/>
            <NavMenu className = "topNavMenu">
                <NavLink to="/about" activeStyle className=".topNavLink">
                    About Me
                </NavLink>
                <NavLink to="/sign-up" activeStyle className=".topNavLink">
                    Resume
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
