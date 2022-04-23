import React from "react";

import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import Pizza from "../assets/img/pizza-slice.png";
import Buger from "../assets/img/hamburger.png";
import Frappe from "../assets/img/frappe.png";
import Coffee from "../assets/img/coffee-cup.png";
import Boiled from "../assets/img/boiled.png";

const Menu = () => {
  window.scroll(0, 0);

  return (
    <div className="menu">
      <div className="menu__text">Pricing Lists</div>
      <div className="menu__title">Choose & Order Now!</div>
      <div className="menu__select">
        <div className="menu__select__flaticon">
          <img src={Pizza} alt="" />
          <span className="text">Pizzas</span>
        </div>
        <div className="menu__select__flaticon">
          <img src={Buger} alt="" />
          <span className="text">Bugers</span>
        </div>
        <div className="menu__select__flaticon">
          <img src={Boiled} alt="" />
          <span className="text">Chicken</span>
        </div>
        <div className="menu__select__flaticon">
          <img src={Frappe} alt="" />
          <span className="text">Beverage</span>
        </div>
        <div className="menu__select__flaticon">
          <img src={Coffee} alt="" />
          <span className="text">Coffee</span>
        </div>
      </div>
      <div className="menu__items">
        <div className="menu__items__left">
          <Link to={`/product/?id=1`}>
            <div className="menu__items__item">
              <div className="contents">
                <span className="name">Quattro Stagioni</span>
                <b className="dot">....................</b>
                <span className="price">$45</span>
              </div>
              <div className="disc">
                Lorem ipsum dolor sit amet consectetur adipiscing ipsum
                suspendisse ultrices gravida.
              </div>
            </div>
          </Link>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
        </div>
        <div className="menu__items__right">
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
          <div className="menu__items__item">
            <div className="contents">
              <span className="name">Quattro Stagioni</span>
              <b className="dot">....................</b>
              <span className="price">$45</span>
            </div>
            <div className="disc">
              Lorem ipsum dolor sit amet consectetur adipiscing ipsum
              suspendisse ultrices gravida.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
