import React, { useState, useEffect } from "react"
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import LoginPage from "./LoginPage"
import ActiveProfile from "./ActiveProfile"
import Matches from "./Matches"
import Home from "./Home"
import DatingPool from "./DatingPool"
import "./App.css"

// Colors/* CSS HEX */
// sapphire blue #0E3B43
// teal #357266
// light green 



function App() {
  const [user, setUser] = useState({})
  const [datingPool, setDatingPool] = useState([])
  const [matches, setMatches] = useState([])
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`https://the-water-cooler-back-end.herokuapp.com/users/1`)
      .then(r => r.json())
      .then(data => {
        setUser(data.user)
        console.log("User:", data.user, "Dating Pool:", data.not_me)
        setDatingPool(data.not_me)
      })
  }, [matches])
  

  return (
    // isLoggedIn ?

      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
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
            <ActiveProfile
              user={user}
              setUser={setUser} />
          </Route>
          <Route exact path="/loginPage">
            <LoginPage
              setisLoggedIn={setisLoggedIn}
              isLoggedIn={isLoggedIn} />
          </Route>
          <Route exact path="/users/:id/matches">
            <Matches
              setMatches={setMatches}
              matches={matches}
              user={user}
            />
          </Route>
        </Switch>
      </div>

      // :

      // <div>
      //   <LoginPage setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn} />
      // </div>
  );
}

export default App;
