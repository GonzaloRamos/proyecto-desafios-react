import React, { useContext, createContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { useLocalStorage } from "../CustomHooks/useLocalStorage/useLocalStorage";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const addToCart = (item, quantity, stock) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return {
            ...cartElement,
            quantity: cartElement.quantity + quantity,
            stock: cartElement.stock - quantity,
          };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((cartElement) => cartElement.id !== itemId));
  };

  const clear = () => setCart([]);

  let totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = () => {
    let number = cart
      .reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2);

    return number;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        isInCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
