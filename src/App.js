import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./style2.css";
import Header from "./components/Header";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

export default function App({ facade }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };
  return (
    <Router>
      <div>
        <ul className="header">
          <Header facade={facade} loggedIn={loggedIn} logout={logout} />
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ex1">
              <Exercise1 facade={facade} />
            </Route>
            <Route path="/ex2">
              <Exercise2 facade={facade} />
            </Route>
            <Route path="/ex3">
              <Exercise3 facade={facade} />
            </Route>
            <Route path="/login">
              <LoginPage
                login={login}
                logout={logout}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                facade={facade}
              />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return null;
}
