import React, { useContext, Fragment } from "react";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Fragment>
      {" "}
      <NavLink to="/cart" className="menu-nav__link">
        {" "}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cartCount">{totalItems}</span>
      </NavLink>{" "}
    </Fragment>
  );
};

export default CartWidget;
