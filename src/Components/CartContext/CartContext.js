import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartToRender, setCartToRender] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = () => {
        for (let index = 0; index < quantity; index++) {
          setCart((prev) => [...prev, { item }]);
        }
      };
    } else {
      return (
        setCart((prev) => [...prev, { item }]) &&
        setCartToRender([new Set(cart)])
      );
    }

    setCartToRender([new Set(cart)]);
    console.log(cart);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((element) => element.item.id === itemId));
    setCartToRender(
      cartToRender.filter((element) => element.item.id === itemId)
    );
  };

  const clear = () => {
    setCart([]);
  };

  // comparto para ver cuantas veces se repite entre los dos arrays
  const unitsPerItem = () => {
    const units = cartToRender.forEach((itemCart) => {
      cart.reduce((total, itemProduct) => {
        return itemProduct === itemCart.id ? (total += 1) : total;
      }, 0);
    });
    return units;
  };

  const totalPrice = () =>
    cart.reduce((totalPrice, itemCart) => totalPrice + itemCart.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
