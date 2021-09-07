import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <Icon name="shopping cart" className="iconMenu" />
        {<span>{totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
