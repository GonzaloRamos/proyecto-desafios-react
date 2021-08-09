import React from "react";
import "./Header.css";

import NavBar from "../NavBar/NavBar";
const Header = ({ title }) => {
  return (
    <div className="Header">
      <NavBar></NavBar>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
