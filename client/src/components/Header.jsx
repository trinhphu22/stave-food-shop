import React from "react";

import { Link } from "react-router-dom";

import Telephone from "../assets/img/telephone.png";
import Logo from "../assets/img/logo.png";
import Cart from "../assets/img/cart.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <div className="header__left__callButton">
            <img src={Telephone} alt="" />
          </div>
          <div className="header__left__text">
            <div className="text">ODER NOW!</div>
            <div className="text">0123 456 789</div>
          </div>
        </div>
        <div className="header__center">
          <ul className="header__center__list">
            <Link to={"/"} className="header__center__list__item">Homepage</Link>
            <Link to={`/product/?id=1`}  className="header__center__list__item">Products</Link>
            <Link to={"/menu"} className="header__center__list__item">Menu</Link>
            <Link to={"/"} className="header__center__list__logo">
              <img src={Logo} alt="" />
            </Link>
            <li className="header__center__list__item">Events</li>
            <li className="header__center__list__item">Blog</li>
            <li className="header__center__list__item">Contact</li>
          </ul>
        </div>
        <div className="header__right">
          <Link to={"/cart"} className="header__right__cart">
            <img src={Cart} alt="" />
          </Link>
          <div className="header__right__counter">2</div>
          <Link to={"/login"} className="header__right__login">
          <i class="fal fa-user-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
