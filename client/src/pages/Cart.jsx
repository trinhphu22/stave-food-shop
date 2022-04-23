import React from "react";
import { Link } from "react-router-dom";

import Img from "../assets/img/pizza.png";

const Cart = () => {
  window.scroll(0, 0);

  return (
    <div className="cart">
      <div className="cart__left">
        <table className="table">
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className="table__imagebox">
                <img src={Img} alt="" />
              </div>
            </td>
            <td>
              <div className="table__name">Quattro Stagioni</div>
            </td>
            <td>
              <div className="table__extras">
                <span>double ingredients</span>
                <br />
                <span>spicy sauce</span>
              </div>
            </td>
            <td>
              <div className="table__price">$19.90</div>
            </td>
            <td>
              <div className="table__quantity">2</div>
            </td>
            <td>
              <div className="table__total">$39.80</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__imagebox">
                <img src={Img} alt="" />
              </div>
            </td>
            <td>
              <div className="table__name">Quattro Stagioni</div>
            </td>
            <td>
              <div className="table__extras">
                <span>double ingredients</span>
                <br />
                <span>spicy sauce</span>
              </div>
            </td>
            <td>
              <div className="table__price">$19.90</div>
            </td>
            <td>
              <div className="table__quantity">2</div>
            </td>
            <td>
              <div className="table__total">$39.80</div>
            </td>
          </tr>
        </table>
      </div>
      <div className="cart__right">
        <div className="cart__right__card">
          <div className="cart__right__card__title">cart total</div>
          <div className="cart__right__card__text">
            <b className="texttitle">Subtotal:</b>$78.60
          </div>
          <div className="cart__right__card__text">
            <b className="texttitle">Discount:</b>$0.0
          </div>
          <div className="cart__right__card__text">
            <b className="texttitle">Total:</b>$78.60
          </div>
          <Link to={"/oder/?id=1"} >
            <button className="cart__right__card__button">checkout now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
