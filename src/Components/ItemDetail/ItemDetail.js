import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const [value] = useState(0);
  const { addToCart } = useContext(CartContext);

  //Actualiza el CartContext

  const onAdd = (count) => {
    if (count !== 0) {
      addToCart(item, count);
      alert("click");
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
            <ItemCount stockItem={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
