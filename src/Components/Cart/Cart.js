import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  console.log(cart);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return <div>{totalPrice}</div>;
};

export default Cart;
