import React from "react";
import { Link } from "react-router-dom";

import Pizza from "../assets/img/pizza.png";

const ProductCard = () => {
  return (
    <div className="productcard">
      <div className="productcard__image">
        <img src={Pizza} alt="" />
        <div className="productcard__image__button">
          <Link className="bttn" to={"/product/?id=1"}>
            ORDER ONLINE &nbsp;
            <i class="fas fa-caret-right"></i>
          </Link>
        </div>
      </div>
      <div className="productcard__title">Quattro Stagioni</div>
      <div className="productcard__discription">
        Learning do amet contur dicivt suia non nuameius velit
      </div>
      <div className="productcard__price">$56.00</div>
    </div>
  );
};

export default ProductCard;
