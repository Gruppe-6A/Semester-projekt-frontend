import { URL } from "./components/settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const signup = (user, password) => {
    const options = makeOptions("POST", true, {
      userName: user,
      userPass: password,
    });
    return fetch(URL + "/api/info/", options)
      .then(handleHttpErrors)
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return loggedIn && roles.includes(neededRole);
  };

  const signupData = (body) => {
    const options = makeOptions("POST", true, { body });
    return fetch(URL + "/api/info/" + options).then(handleHttpErrors);
  };

  const fetchLoggedIn = (endpoint, updateAction) => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/info/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data));
  };

  const fetchData = (endpoint, updateAction) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data));
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    fetchLoggedIn,
    getUserRoles,
    hasUserAccess,
    signupData,
    signup,
  };
}
const facade = apiFacade();
export default facade;
