import React from "react";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";

//Componentes
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="containerRow">
      {" "}
      <ItemList dataProductos={products} />
    </div>
  );
};

export default ItemListContainer;
