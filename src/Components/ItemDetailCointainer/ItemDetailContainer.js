import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoaderClothes from "../Loader/LoaderClothes";

const ItemDetailContainer = ({ itemID }) => {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoad(false);
      });
  }, [itemID]);

  return load ? <LoaderClothes /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
