import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="menu-btn">
        <span
          className={` ${
            showMenu ? "menu-btn__burger open" : "menu-btn__burger"
          }`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faBars} />{" "}
        </span>
      </div>

      <nav className={` ${showMenu ? "nav open" : "nav"}`}>
        <ul className={` ${showMenu ? "menu-nav open" : "menu-nav"}`}>
          <li
            className={` ${
              showMenu ? "menu-nav__item open" : "menu-nav__item"
            }`}
          >
            <NavLink to="/" className="menu-nav__link" activeClassName="active">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li
            className={` ${
              showMenu ? "menu-nav__item open" : "menu-nav__item"
            }`}
          >
            <NavLink
              to="/category/men's clothing"
              className="menu-nav__link"
              activeClassName="active"
            >
              {" "}
              Men's Clothes{" "}
            </NavLink>
          </li>
          <li
            className={` ${
              showMenu ? "menu-nav__item open" : "menu-nav__item"
            }`}
          >
            <NavLink to="/category/women's clothing" className="menu-nav__link">
              {" "}
              Women's Clothes{" "}
            </NavLink>
          </li>
          <li
            className={` ${
              showMenu ? "menu-nav__item open" : "menu-nav__item"
            }`}
          >
            <NavLink to="/category/jewelery" className="menu-nav__link">
              {" "}
              Jewerly{" "}
            </NavLink>{" "}
          </li>
          <li
            className={` ${
              showMenu ? "menu-nav__item open" : "menu-nav__item"
            }`}
          >
            <CartWidget></CartWidget>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
