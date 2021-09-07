import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import CartList from "../CartList/CartList";

const Cart = () => {
  const { cart, totalPrice, removeItem, clear } = useCartContext();
  return (
    <Fragment>
      <div className="cartContainer">
        {cart.length === 0 ? (
          <div>
            {" "}
            <h3> ¡No items in cart!</h3>
            <Link to="">
              <button>View Products</button>
            </Link>
          </div>
        ) : (
          <div>
            <ul>
              {cart.map((item) => {
                return (
                  <CartList
                    cartElement={item}
                    removeItem={removeItem}
                    key={item.id}
                  />
                );
              })}
            </ul>
            <div>Total Price: $ {totalPrice()}</div>
            <button onClick={() => clear()}>Clear Cart</button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
