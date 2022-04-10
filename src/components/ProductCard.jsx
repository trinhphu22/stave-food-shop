import React from "react";

import Pizza from "../assets/img/pizza.png";

const ProductCard = () => {
  return (
    <div className="productcard">
      <div className="productcard__image">
        <img src={Pizza} alt="" />
        <div className="productcard__image__button">
          <a href="/">
            ORDER ONLINE 
            &nbsp;
            <i class="fas fa-caret-right"></i>
          </a>
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
