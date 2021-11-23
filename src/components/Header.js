import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex1">
          Crypto
        </NavLink>
      </li>
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
    </div>
  );
}

export default Header;
