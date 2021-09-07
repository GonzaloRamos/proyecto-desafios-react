import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart, cart, isInCart } = useCartContext();

  const [stock, setStock] = useState(() => {
    let itemStock = () => {
      if (isInCart(item.id)) {
        const newStock = cart.filter(
          (cartElement) => cartElement.id === item.id
        );

        return newStock[0].stock;
      } else {
        return Math.floor(Math.random() * 10);
      }
    };
    return itemStock();
  });

  item.stock = stock;
  const [value, setValue] = useState(0);

  //Actualiza el CartContext
  const onAdd = (count) => {
    if (count !== 0) {
      addToCart(item, count);
      setValue(1);
    } else {
      alert("you have to add something");
    }
  };
  return (
    <section className="singleProduct">
      {" "}
      <div className="singleProduct__left">
        {" "}
        <img src={item.image} alt="sarasa" />
      </div>
      <div className="singleProduct__right">
        <div className="singleProduct__right__title">
          <h2>{item.title}</h2>
        </div>
        <div className="singleProduct__right__description">
          {" "}
          <p>{item.description}</p> <p>&#36; {item.price}</p>
        </div>
        <div className="singleProduct__right__itemCount">
          {value > 0 ? (
            <Link to="/cart">
              <button>Buy now</button>
            </Link>
          ) : (
            <ItemCount stockItem={stock} onAdd={onAdd} setStock={setStock} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
