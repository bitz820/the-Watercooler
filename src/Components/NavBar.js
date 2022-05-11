import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink
        exact to="/loginPage"
        // style={linkStyles}
        // activeStyle={active}
        >
            Login!
        </NavLink>
        <NavLink
        exact to="/matches"
        // style={linkStyles}
        // activeStyle={active}
        >
            View My Matches
        </NavLink>
        <NavLink
        exact to="/"
        // style={linkStyles}
        // activeStyle={active}
        >
            Swipe for Love
        </NavLink>
        <NavLink
        exact to="/userProfile"
        // style={linkStyles}
        // activeStyle={active}
        >
            View My Profile
        </NavLink> 
    </div>
  )
}

export default NavBar