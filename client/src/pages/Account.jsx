import React, { useState } from "react";
import classNames from "classnames";
import Login from "../components/AccountBox/Login";
import Signup from "../components/AccountBox/Signup";

import Logo from "../assets/img/logo.png";

import { AccountContext } from "../components/AccountBox/context";

const Account = () => {
  const [active, setActive] = useState("login");

  window.scroll(0, 0);

  const switchToSignup = () => {
    setActive("signup");
  };

  const switchToLogin = () => {
    setActive("login");
  };

  const contextValue = {
    switchToSignup,
    switchToLogin,
  };

  return (
      <AccountContext.Provider value={contextValue}>
        <div className="account">
          <div className="account__box">
            <div className="account__box__logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="account__box__header">
              <div className="account__box__header__tabs">
                <div className="account__box__header__tabs__account">
                  <a
                    className={classNames(active === "login" && "onActive")}
                    href="#login"
                    onClick={switchToLogin}
                  >
                    log in
                  </a>
                </div>
                <div className="account__box__header__tabs__signup">
                  <a
                    className={classNames(active === "signup" && "onActive")}
                    href="#signup"
                    onClick={switchToSignup}
                  >
                    sign up
                  </a>
                </div>
              </div>
              {active === "login" && <Login />}
              {active === "signup" && <Signup />}
            </div>
          </div>
        </div>
      </AccountContext.Provider>
  );
};

export default Account;
