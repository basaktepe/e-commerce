import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/productDetails.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  const addProductToBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
  };

  return (
    <div className="product-detail-wrapper">
      <div className="detail-img-wrapper">
        <img
          src={image}
          style={{ width: "18.75rem", height: "400px" }}
          alt=""
        />
      </div>

      <div className="detail-text-wrapper">
        <h1 className="product-detail-title">{title}</h1>
        <p className="product-detail-description">{description} </p>
        <h2 className="product-detail-price" style={{}}>
          {price}₺
        </h2>
        <div className="detail-counter-wrapper">
          <CiCircleMinus onClick={decrement} className="product-detail-minus" />
          <span className="product-detail-count">{count}</span>
          <CiCirclePlus onClick={increment} className="product-detail-plus" />
        </div>
        <div>
          <button onClick={addProductToBasket} className="add-to-cart-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
