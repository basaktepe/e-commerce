import React, { useState } from "react";
import "/src/css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(false);
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
      <div className="flex-row">
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

          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
