import { useEffect, useState } from "react";

import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { changeDrawer, findTotal } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, total } = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTotal());
  }, []);

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="basket-drawer"
          anchor="right"
          open={drawer}
          onClose={() => dispatch(changeDrawer())}
        >
          {products &&
            products.map((product, index) => {
              return (
                <div key={`${product.id}-${index}`}>
                  <div className="flex-row drawer-container ">
                    <img src={product.image} width={50} height={50}></img>
                    <p style={{ width: "20rem" }}>
                      {product.title}({product.count})
                    </p>
                    <p style={{ fontWeight: "bold", width: "3.125rem" }}>
                      {product.price}TL
                    </p>
                    <button className="delete-item-button">
                      <FaRegTrashAlt className="trash-can" />
                    </button>
                  </div>
                </div>
              );
            })}
          <div>
            <p>Total amount : {total}</p>
          </div>
        </Drawer>
      </PageContainer>
    </>
  );
}

export default App;
