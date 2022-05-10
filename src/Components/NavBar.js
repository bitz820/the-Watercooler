import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink
        to="/"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            My Profile
        </NavLink>
        <NavLink
        to="/loverProfile"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            Swipe for Love
        </NavLink>
        {/* <NavLink
        to="/matches"
        exact
        // style={linkStyles}
        // activeStyle={active}
        >
            My Matches
        </NavLink> */}
    </div>
  )
}

export default NavBar