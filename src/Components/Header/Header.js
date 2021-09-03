import React from "react";

import NavBar from "../NavBar/NavBar";

// import NavBarTwo from "../NavBar/NavBarTwo";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <NavBar></NavBar>
      {/* <NavBarTwo></NavBarTwo> */}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
