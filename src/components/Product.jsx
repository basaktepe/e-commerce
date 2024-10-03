import React from "react";
import "../css/product.css";
import { Button } from "bootstrap";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "80px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price} ₺</h3>
      </div>
      <div className="flex-row">
        <button className="detail-button">Product Details</button>
      </div>
    </div>
  );
}

export default Product;
