import React, { useState, useEffect } from "react"
import { Route, Switch, useHistory } from 'react-router-dom'
import NavBar from "./NavBar"
import styled from "styled-components"
import LoginPage from "./LoginPage"
import ActiveProfile from "./ActiveProfile"
import Matches from "./Matches"
import Home from "./Home"
import DatingPool from "./DatingPool"


// Colors/* CSS HEX */
// sapphire blue #0E3B43
// teal #357266
// light green 
// dark grey --gray-x-11-gray: #b8b8b8ff;
// light pink --pastel-pink: #e39695ff;
// dark pink --candy-pink: #df7373ff;

const Div = styled.div`
background-color: #65532F;
font-family: 'Monaco', sans-serif;
color: #312509;
text-align: center;
height: 100%;
padding: 100px;
`


function App() {
  const [user, setUser] = useState({})
  const [datingPool, setDatingPool] = useState([])
  const [matches, setMatches] = useState([])
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:9292/users/1`)
      .then(r => r.json())
      .then(data => {
        setUser(data.user)
        console.log("User:", data.user, "Dating Pool:", data.not_me)
        setDatingPool(data.not_me)
      })
  }, [matches])

  return (
    isLoggedIn ?

    <Div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/datingPool">
          <DatingPool
            setDatingPool={setDatingPool}
            user={user}
            datingPool={datingPool}
            matches={matches}
          />
        </Route>
        <Route exact path="/userProfile">
          <ActiveProfile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/users/:id/matches">
          <Matches
            setMatches={setMatches}
            matches={matches}
            user={user}
          />
        </Route>
      </Switch>
    </Div>

    :
    <Div>
    <LoginPage setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} />
    </Div>
  );
}

export default App;
