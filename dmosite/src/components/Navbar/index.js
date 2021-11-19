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
                <NavLink to="/resume" activeStyle className=".topNavLink">
                    Resume
                </NavLink>
                <NavLink to="/projects" activeStyle className=".topNavLink">
                    Projects
                </NavLink>
                <NavLink to="/bookrec" activeStyle className=".topNavLink">
                    Book Recs
                </NavLink>
                <NavLink to="/blog" activeStyle className=".topNavLink">
                    Blog
                </NavLink>
                <NavLink to="/contact" activeStyle className=".topNavLink">
                    Contact
                </NavLink>


            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
