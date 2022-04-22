import React from "react";

import Paid from "../assets/img/paid.png";
import Checked from "../assets/img/checked.png";
import Bake from "../assets/img/bake.png";
import Bike from "../assets/img/bike.png";
import Delivered from "../assets/img/delivered.png";

const Oder = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "states__done";
    if (index - status === 1) return "states__inProgress";
    if (index - status > 1) return "states__undone";
  };

  return (
    <div className="oder">
      <div className="oder__left">
        <table className="table">
          <tr>
            <th>Oder ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className="table__id">5K5owYO7nbwgxQaNJu2O</div>
            </td>
            <td>
              <div className="table__name">Scarlett Johansson</div>
            </td>
            <td>
              <div className="table__address">Elton st. 231-33 LA</div>
            </td>
            <td>
              <div className="table__phonenumber">(310) 856 1234</div>
            </td>
            <td>
              <div className="table__total">$39.80</div>
            </td>
          </tr>
        </table>
        <div className="states">
          <div className={statusClass(0)}>
            <img src={Paid} alt="" />
            <span>Payment</span>
            <div className="checked">
              <img src={Checked} alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <img src={Bake} alt="" />
            <span>Preparing</span>
            <div className="checked">
              <img src={Checked} alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <img src={Bike} alt="" />
            <span>On the way</span>
            <div className="checked">
              <img src={Checked} alt="" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <img src={Delivered} alt="" />
            <span>Delivered</span>
            <div className="checked">
              <img src={Checked} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="oder__right">
        <div className="oder__right__card">
          <div className="oder__right__card__title">oder total</div>
          <div className="oder__right__card__text">
            <b className="texttitle">Subtotal:</b>$78.60
          </div>
          <div className="oder__right__card__text">
            <b className="texttitle">Discount:</b>$0.0
          </div>
          <div className="oder__right__card__text">
            <b className="texttitle">Total:</b>$78.60
          </div>
          <button disabled className="oder__right__card__button">
            paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oder;
