import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import Signup from "./Components/Signup";

import "./index.css";

WebFont.load({
  google: {
    families: ["Montserrat:100,200,300,400,500,600,700,800,900"],
  },
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
