import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import CartList from "../CartList/CartList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFrownOpen } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
  const { cart, totalPrice, removeItem, clear } = useCartContext();

  return (
    <Fragment>
      {cart.length === 0 ? (
        <div className="cartContainer__noItems">
          <h3> ¡No items in cart!</h3>
          <FontAwesomeIcon icon={faFrownOpen} />
          <Link to="/">
            <button className="btn-primary">View Products</button>
          </Link>
        </div>
      ) : (
        <div className="cartContainer__Items">
          {cart.map((item) => {
            return (
              <CartList
                cartElement={item}
                removeItem={removeItem}
                itemImage={item.image}
                key={item.id}
              />
            );
          })}

          <footer className="cart__footer">
            <div className="cart__footer-summary">
              <span className="item__footer__price">
                {" "}
                Total Price: ${totalPrice()}
              </span>
              <span className="btn-cart__action" onClick={() => clear()}>
                Clear Cart
              </span>
            </div>
            <div className="cart__footer-btn-container">
              <Link className="btn-cart__purchase" to="/purchase">
                Purchase
              </Link>
            </div>
          </footer>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
