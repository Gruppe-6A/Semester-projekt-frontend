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
import facade from "./apiFacade";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/Login";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App(props) {
  return (
    <Router>
      <div>
        <ul className="header">
          <Header />
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ex1">
              <Exercise1 facade={props.facade} />
            </Route>
            <Route path="/ex2">
              <Exercise2 facade={props.facade}/>
            </Route>
            <Route path="/ex3">
              <Exercise3 facade={props.facade} />

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
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <h2>Frontend Startcode</h2>
      <div>
        {!loggedIn ? (
          <LogIn login={login} />
        ) : (
          <div>
            <LoggedIn facade={facade} />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
