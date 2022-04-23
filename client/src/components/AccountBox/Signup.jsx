import React from "react";

const Signup = (props) => {

  return (
    <>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value="confirmPassword"
        />
        <p className="account__box__body__message">{}</p>
      </div>
      <div className="account__box__footer">
        <button>Sign up</button>
      </div>
    </>
  );
};

export default Signup;
