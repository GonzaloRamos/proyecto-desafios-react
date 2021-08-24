import React from "react";

import NavBar from "../NavBar/NavBar";
const Header = ({ title }) => {
  return (
    <header className="Header">
      <NavBar></NavBar>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
