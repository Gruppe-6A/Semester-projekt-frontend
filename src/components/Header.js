import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header({ facade, loggedIn }) {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      {facade.hasUserAccess("user", loggedIn) && (
        <li>
          <NavLink exact activeClassName="selected" to="/ex1">
            Crypto
          </NavLink>
        </li>
      )}
      <li>
        <NavLink exact activeClassName="selected" to="/ex2">
          Jokes
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex3">
          Exercise 3
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink exact activeClassName="selected" to="/login">
          Login
        </NavLink>
      </li>
      <li
        style={{
          float: "right",
          color: "white",
          marginTop: "12px",
          marginRight: "10px",
        }}
      >
        <p>Role: {facade.getUserRoles()}</p>
      </li>
    </div>
  );
}

export default Header;
