import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart, cart, isInCart } = useCartContext();
  const [stock, setStock] = useState(() => {
    let itemStock = () => {
      if (isInCart(item.id)) {
        const itemInCart = cart.filter(
          (cartElement) => cartElement.id === item.id
        );

        const quantityItemInCart = itemInCart[0].quantity;
        const itemStock = item.stock;

        return itemStock - quantityItemInCart;
      } else {
        return item.stock;
      }
    };
    return itemStock();
  });

  const [value, setValue] = useState(0);

  //Actualiza el CartContext
  const onAdd = (count) => {
    if (count !== 0) {
      addToCart(item, count);
      setValue(1);
    } else {
      alert("You have to add something");
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
          <h5> Description</h5>
          <p>{item.description}</p>
        </div>
        <div className="singleProduct__right__itemCount">
          {value > 0 ? (
            <Link to="/cart">
              <button className="btn-BuyNow">Buy now</button>
            </Link>
          ) : (
            <ItemCount
              stockItem={stock}
              onAdd={onAdd}
              setStock={setStock}
              price={item.price}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
