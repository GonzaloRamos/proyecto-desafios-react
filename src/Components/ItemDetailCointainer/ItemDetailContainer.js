import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ itemID }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [itemID]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
