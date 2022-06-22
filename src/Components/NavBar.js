import React from 'react'
import { NavLink } from 'react-router-dom'

const active = {
    // background: "0E3B43",
    color: "#312509",
    fontWeight: "bold",
    border: "#312509 6px solid"
}


// const StyledLink = styled(NavLink)`
//     /* width: 100%; */
//     padding: 12px;
//     margin:  6px 6px;
//     background: #357266;
//     border: #312509 6px solid;
//     text-decoration: none;
//     color: white;
// `



const NavBar = () => {
  return (
    <div className='navbar'>
        <NavLink className="navlink"
        exact to="/"
        activeStyle={active}
        >
            home
        </NavLink>
        <NavLink className="navlink"
        exact to="/datingPool"
        activeStyle={active}
        >
           devs.find(love)
        </NavLink>
        <NavLink className="navlink"
        exact to="/users/:id/matches"
        activeStyle={active}
        >
            console.log(my_matches)
        </NavLink>
        <NavLink className="navlink"
        exact to="/userProfile"
        activeStyle={active}
        >
            profile.update()
        </NavLink> 
        
        <NavLink className="navlink"
        exact to="/loginPage"
        activeStyle={active}
        >
            setIsLoggedIn(false)
        </NavLink>
    </div>
  )
}

export default NavBar