import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header({ facade, loggedIn, dataFromServer, logout }) {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      {facade.hasUserAccess("user", loggedIn) && (
        <li>
          <NavLink exact activeClassName="selected" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
      )}
      {facade.hasUserAccess("user", loggedIn) && (
        <li>
          <NavLink exact activeClassName="selected" to="/favorites">
            Favorites
          </NavLink>
        </li>
      )}
      {facade.hasUserAccess("admin", loggedIn) && (
        <li>
          <NavLink exact activeClassName="selected" to="/adminpage">
            Administrative page
          </NavLink>
        </li>
      )}
      {!(
        facade.hasUserAccess("admin", loggedIn) ||
        facade.hasUserAccess("user", loggedIn)
      ) && (
        <li style={{ float: "right" }}>
          <NavLink exact activeClassName="selected" to="/signup">
            Sign up
          </NavLink>
        </li>
      )}
      {!(
        facade.hasUserAccess("admin", loggedIn) ||
        facade.hasUserAccess("user", loggedIn)
      ) && (
        <li style={{ float: "right" }}>
          <NavLink exact activeClassName="selected" to="/login">
            Login
          </NavLink>
        </li>
      )}
      {(facade.hasUserAccess("user", loggedIn) ||
        facade.hasUserAccess("admin", loggedIn)) && (
        <li style={{ float: "right" }}>
          <NavLink exact activeClassName="selected" to="/">
            <button
              type="button"
              className="btn-sm btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          </NavLink>
        </li>
      )}
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
