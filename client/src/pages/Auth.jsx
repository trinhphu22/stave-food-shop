import React, { useState, useContext } from "react";
import classNames from "classnames";
import Login from "../components/AccountBox/Login";
import Signup from "../components/AccountBox/Signup";
import Logo from "../assets/img/logo.png";
import {AuthContext} from '../contexts/AuthContext'
import { Redirect } from "react-router-dom";

const Account = ({authRoute}) => {

  const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

  const [active, setActive] = useState(authRoute);

  if (isAuthenticated) return <Redirect to='/' />
  else <Redirect to ='/login'/>

  window.scroll(0, 0);

  const switchToSignup = () => {
    setActive("register");
  };

  const switchToLogin = () => {
    setActive("login");
  };


  return (

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
                    href="/login"
                    onClick={switchToLogin}
                  >
                    log in
                  </a>
                </div>
                <div className="account__box__header__tabs__signup">
                  <a
                    className={classNames(active === "register" && "onActive")}
                    href="/register"
                    onClick={switchToSignup}
                  >
                    sign up
                  </a>
                </div>
              </div>
              {active === "login" && <Login />}
              {active === "register" && <Signup />}
            </div>
          </div>
        </div>
   
  );
};

export default Account;
