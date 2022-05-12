import React, {useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import LoginPage from "./LoginPage"
import ActiveProfile from "./ActiveProfile"
import Matches from "./Matches"
import DatingPool from "./DatingPool"

function App() {
  const [user, setUser] = useState({})
  const [datingPool, setDatingPool] = useState([])
  const [isAMatch, setIsAMatch] = useState([])

    useEffect (() => {
      fetch(`http://localhost:9292/users/1`)
      .then(r=>r.json())
      .then(data => {
        setUser(data.user)
        console.log("User:", data.user, "Dating Pool:", data.not_me)
        setDatingPool(data.not_me)
      })
    }, [isAMatch])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <DatingPool 
          setDatingPool={setDatingPool} 
          user={user} 
          datingPool={datingPool}
          />
        </Route>
        <Route exact path="/userProfile">
          <ActiveProfile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage />
        </Route>
        <Route exact path="/users/:id/matches">
          <Matches 
          setIsAMatch={setIsAMatch}
          isAMatch={isAMatch}
          user={user} 
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
