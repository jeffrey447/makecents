import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/">LandingPage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
