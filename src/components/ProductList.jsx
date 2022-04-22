import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="productlist__text">Quality Products</div>
      <div className="productlist__title">Pizza Menu As Expected!</div>
      <div className="productlist__cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="button-box">
        <Link to={"/menu"} class="btn btn--border btn--primary btn--animated">
          view all products
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
