function Signup() {
  return (
    <div className="container-md">
      <div className="row">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <h2>Sign up</h2>
          <form>
            <div>
              <input
                type="text"
                className="form-control col-md-auto mb-2"
                placeholder="Enter your name"
                id="username"
              />
              <div>
                <input
                  type="password"
                  className="form-control col-md-auto mb-2"
                  placeholder="Enter your password"
                  id="password"
                />
              </div>
              <div>
                <button type="button" className="btn btn-success mb-2">
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
