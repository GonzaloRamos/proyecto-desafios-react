import React from "react";
import { Icon } from "semantic-ui-react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

// import { CartContext } from "react/cjs/react.development";

const CartWidget = () => {
  // const { cart } = useContext(CartContext);

  // const totalItems = cart.length;
  return (
    <div>
      <Link to="/cart">
        <Icon name="shopping cart" className="iconMenu" />
        {/* <span>{totalItems}</span> */}
      </Link>
    </div>
  );
};

export default CartWidget;
