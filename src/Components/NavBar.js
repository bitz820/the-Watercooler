import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink
        to="/loginPage"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            Login!
        </NavLink>
        <NavLink
        to="/matches"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            View My Matches
        </NavLink>
        <NavLink
        to="/"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            Swipe for Love
        </NavLink>
        <NavLink
        to="/userProfile"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            View My Profile
        </NavLink> 
    </div>
  )
}

export default NavBar