import React from "react";

const Login = (props) => {
  return (
    <>
      <form>
          <div className="account__box__body">
            <input
              type="text"
              placeholder="User name"
              value="username"
              required
            />
            <p className="account__box__body__message"></p>
            <input
              type="password"
              placeholder="Password"
              value="password"
              required
            />
            <p className="account__box__body__message"></p>
          </div>
          <div className="account__box__footer">
            <button type="submit">Log In</button>
            <a href="#a">Forgotten password?</a>
          </div>
      </form>
    </>
  );
};

export default Login;
