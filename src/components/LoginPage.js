import { useState, useEffect } from "react";
import facade from "../apiFacade";
import LoggedIn from "./LoggedIn";
import LogIn from "./Login";

export default function LoginPage({
  logout,
  loggedIn,
  setLoggedIn,
  facade,
  login,
}) {
  return (
    <div className="position-absolute top-10 start-50 translate-middle-x pt-3">
      <div>
        {!loggedIn ? (
          <LogIn login={login} setLoggedIn={setLoggedIn} />
        ) : (
          <div>
            <p>Role: {facade.getUserRoles()}</p>
            <LoggedIn facade={facade} />

            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
