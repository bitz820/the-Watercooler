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

    useEffect (() => {
      fetch(`http://localhost:9292/users/1`)
      // fetch(`http://localhost:9292/users/${id}`)
      .then(r=>r.json())
      .then(data => {

        setUser(data.user)
        console.log(data.user)
        setDatingPool(data.not_me)
        console.log(data.not_me)
      })
    }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <DatingPool data={datingPool}/>
        </Route>
        <Route exact path="/userProfile">
          <ActiveProfile user={user} />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage />
        </Route>
        <Route exact path="/matches">
          <Matches user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
