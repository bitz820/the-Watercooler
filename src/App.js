import React from "react"
import { Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import User from "./User"
import LoverProfile from "./LoverProfile"
// import Match from "./Match"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route path="/loverProfile">
          <LoverProfile />
        </Route>
        {/* <Route path="/matches">
          <Match/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
