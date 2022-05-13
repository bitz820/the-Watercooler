import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const linkStyles = {
    display: "inline",
    width: "100%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#357266",
    border: "#312509 6px solid",
    textDecoration: "none",
    color: 'white',
}

const active = {
    // background: "0E3B43",
    color: "#312509",
    fontWeight: "bold",
    border: "#312509 6px solid"
}

const NavStyle = styled.div`
    display: flex;
    /* width: 35vh; */
    padding: 10px;
    text-align: center;
    font-size: 30px;
    align-items: center;
    margin: 30px;
    justify-content: space-evenly;
`

const LinkStyle = styled(NavLink)`
    display: inline;
    width: 100%;
    padding: 12px;
    margin: 0 6px 6px;
    background: #357266;
    border: #312509 6px solid;
    text-decoration: none;
    color: white;
`



const NavBar = () => {
  return (
    <NavStyle>
        <LinkStyle
        exact to="/loginPage"
        // style={linkStyles}
        activeStyle={active}
        >
            <p>Login!</p>
        </LinkStyle>
        <LinkStyle
        exact to="/users/:id/matches"
        // exact to="/users/:id/matches"
        style={linkStyles}
        activeStyle={active}
        >
            <p>console.log(my_matches)</p>
        </LinkStyle>
        <LinkStyle
        exact to="/"
        style={linkStyles}
        activeStyle={active}
        >
            onClick="love"
        </LinkStyle>
        <LinkStyle
        exact to="/userProfile"
        style={linkStyles}
        activeStyle={active}
        >
            Profile.update()
        </LinkStyle> 
    </NavStyle>
  )
}

export default NavBar