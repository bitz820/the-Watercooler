import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const linkStyles = {
    display: "inline",
    width: "100%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "tan",
    border: "red 6px solid",
    textDecoration: "none",
    color: "red",
}

const active = {
    background: "red",
    color: "white",
    fontWeight: "bold",
    border: "white 6px solid"
}

const NavStyle = styled.div`
    padding: 10px;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-around;
`



const NavBar = () => {
  return (
    <NavStyle>
        <NavLink
        exact to="/loginPage"
        style={linkStyles}
        activeStyle={active}
        >
            Login!
        </NavLink>
        <NavLink
        exact to="/users/:id/matches"
        // exact to="/users/:id/matches"
        style={linkStyles}
        activeStyle={active}
        >
            View My Matches
        </NavLink>
        <NavLink
        exact to="/"
        style={linkStyles}
        activeStyle={active}
        >
            Swipe for Love
        </NavLink>
        <NavLink
        exact to="/userProfile"
        style={linkStyles}
        activeStyle={active}
        >
            View My Profile
        </NavLink> 
    </NavStyle>
  )
}

export default NavBar