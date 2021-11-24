import { useState } from "react";

export default function LogIn({ login, setLoggedIn }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password, setLoggedIn);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <h2>Login</h2>
          <form onChange={onChange}>
            <div>
              <input
                type="text"
                className="form-control col-md-auto mb-2"
                placeholder="Username"
                id="username"
              />
              <div>
                <input
                  type="password"
                  className="form-control col-md-auto mb-2"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  onClick={performLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="col-sm-4" />
        </div>
      </div>
    </div>
  );
}
