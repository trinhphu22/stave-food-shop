import React, { useState } from "react";

import Image from "../assets/img/pizza.png";
import Size from "../assets/img/size.png";

const Product = () => {
  const [size, setSize] = useState(0);

  window.scroll(0, 0);

  const pizza = {
    id: 1,
    img: Image,
    name: "Quattro Stagioni",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
  };

  return (
    <div className="product">
      <div className="product__left">
        <div className="product__left__imagebox">
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className="product__right">
        <div className="product__right__title">{pizza.name}</div>
        <div className="product__right__price">${pizza.price[size]}</div>
        <div className="product__right__desc">{pizza.desc}</div>
        <div className="product__right__choose">Choose the size</div>
        <div className="product__right__sizes">
          <div
            className="product__right__sizes__size"
            onClick={() => setSize(0)}
          >
            <img src={Size} alt="" />
            <span className="number">Small</span>
          </div>
          <div
            className="product__right__sizes__size"
            onClick={() => setSize(1)}
          >
            <img src={Size} alt="" />
            <span className="number">Medium</span>
          </div>
          <div
            className="product__right__sizes__size"
            onClick={() => setSize(2)}
          >
            <img src={Size} alt="" />
            <span className="number">Large</span>
          </div>
        </div>
        <div className="product__right__choose">
          Choose additional ingredients
        </div>
        <div className="product__right__ingredients">
          <div className="product__right__ingredients__option">
            <input
              type="checkbox"
              name="double"
              id="double"
              className="checkbox"
            />
            <label htmlFor="double">double ingredients</label>
          </div>
          <div className="product__right__ingredients__option">
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              className="checkbox"
            />
            <label htmlFor="cheese">extra cheese</label>
          </div>
          <div className="product__right__ingredients__option">
            <input
              type="checkbox"
              name="spicy"
              id="spicy"
              className="checkbox"
            />
            <label htmlFor="spicy">spicy sauce</label>
          </div>
          <div className="product__right__ingredients__option">
            <input
              type="checkbox"
              name="garlic"
              id="garlic"
              className="checkbox"
            />
            <label htmlFor="garlic">garlic sauce</label>
          </div>
        </div>
        <div className="product__right__add">
          <input type="number" defaultValue={1} min={1} className="quantity" />
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
