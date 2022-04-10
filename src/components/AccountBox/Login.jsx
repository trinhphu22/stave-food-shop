import React from "react";

const Login = (props) => {
  return (
    <>
      <div className="account__box__body">
        <input
          type="text"
          placeholder="Email"
        />
        <p className="account__box__body__message"></p>
        <input
          type="password"
          placeholder="Password"
        />
        <p className="account__box__body__message"></p>
      </div>
      <div className="account__box__footer">
        <button>Log In</button>
        <a href="#a">Forgotten password?</a>
      </div>
    </>
  );
};

export default Login;
