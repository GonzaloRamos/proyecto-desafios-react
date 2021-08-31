import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  let stock = 5;

  const [product, setProduct] = useState(0);

  const onAdd = (i) => {
    setProduct(i);
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
          <p>{item.description}</p>{" "}
        </div>
        <div className="singleProduct__right__itemCount">
          {product > 0 ? (
            <Link to="/cart">
              <button>Buy now</button>
            </Link>
          ) : (
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
