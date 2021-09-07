import React from "react";

const CartList = ({ cartElement, removeItem }) => {
  return (
    <div>
      <li>
        <span>{cartElement.quantity} x</span> {cartElement.title}{" "}
        <span> $ {(cartElement.price * cartElement.quantity).toFixed(2)}</span>{" "}
        <button
          onClick={() => {
            removeItem(cartElement.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default CartList;
