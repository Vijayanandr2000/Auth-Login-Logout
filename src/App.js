import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/User";
import Protect from "./components/ProtectRoute";
import User from "./components/Homepage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Protect path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};
export default App;
