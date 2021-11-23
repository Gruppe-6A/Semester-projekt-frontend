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
    <div className="position-absolute top-10 start-50 translate-middle-x pt-3">
      <h2>Login</h2>
      <form onChange={onChange}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          id="username"
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          id="password"
        />
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={performLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}
