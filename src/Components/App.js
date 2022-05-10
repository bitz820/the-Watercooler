import React from "react"
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import LoginPage from "./LoginPage"
import ActiveProfile from "./ActiveProfile"
import Matches from "./Matches"
import DatingPool from "./DatingPool"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ActiveProfile />
        </Route>
        <Route path="/loginPage">
          <LoginPage />
        </Route>
        <Route path="/matches">
          <Matches/>
        </Route>
        <Route path="/datingPool">
          <DatingPool/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
