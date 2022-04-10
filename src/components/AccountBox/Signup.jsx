import React from "react";

const Signup = (props) => {

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
        <input
          type="password"
          placeholder="Confirm Password"
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
