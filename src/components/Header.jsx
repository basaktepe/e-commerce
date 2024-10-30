import React, { useState } from "react";
import "/src/css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { changeDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.basket);

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="flex-row"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img className="logo" src="/src/images/logo.png" alt="" />
        <p className="logo-text">Başak A.Ş.</p>
      </div>
      <div className="flex-row">
        <input
          className="header-input"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge badgeContent={products.length} color="secondary">
            <CiShoppingBasket
              onClick={() => dispatch(changeDrawer())}
              className="icon"
              style={{ marginRight: "5px" }}
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
