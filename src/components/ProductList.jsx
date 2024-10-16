import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div
      className="flex-row"
      style={{ flexWrap: "wrap", marginTop: "25px", gap: "0.3125rem" }}
    >
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
    </div>
  );
}

export default ProductList;
