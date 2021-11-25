import { useState, useEffect } from "react";
import facade from "../apiFacade";

function Signup() {
  const init = { username: "", password: "" };
  const [signupCredentials, setSignupCredentials] = useState(init);

  const performSignup = (evt) => {
    evt.preventDefault();
    facade.signup(signupCredentials.username, signupCredentials.password);
  };
  const onChange = (evt) => {
    setSignupCredentials({
      ...signupCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <h2>Sign up</h2>
          <form onChange={onChange}>
            <div>
              <input
                type="text"
                className="form-control col-md-auto mb-2"
                placeholder="Enter a username"
                id="username"
                name="userName"
              />
              <div>
                <input
                  type="password"
                  className="form-control col-md-auto mb-2"
                  placeholder="Enter your password"
                  id="password"
                  name="userPass"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-success mb-2"
                  onClick={performSignup}
                >
                  Sign up
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

export default Signup;
