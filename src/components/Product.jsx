import React from "react";
import "../css/product.css";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "80px" }}>{title}</p>
        <h3 className="price">{price}₺</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Product Details
        </button>
      </div>
    </div>
  );
}

export default Product;
