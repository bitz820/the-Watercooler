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
          <DatingPool/>
        </Route>
        <Route exact path="/userProfile">
          <ActiveProfile />
        </Route>
        <Route exact path="/loginPage">
          <LoginPage />
        </Route>
        <Route exact path="/matches">
          <Matches/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
