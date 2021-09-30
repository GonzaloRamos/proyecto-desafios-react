import React, { useContext } from "react";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <>
      {" "}
      <NavLink to="/cart" className="menu-nav__link" activeClassName="selected">
        {" "}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cartCount">{totalItems}</span>
      </NavLink>{" "}
    </>
  );
};

export default CartWidget;
