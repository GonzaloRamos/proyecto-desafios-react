import React from "react";
import { useEffect, useState } from "react";

//Componentes
import ItemList from "../ItemList/ItemList";
import LoaderClothes from "../Loader/LoaderClothes";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const dataFilter = data.filter(
          (e) =>
            e.category === "men's clothing" ||
            e.category === "jewelery" ||
            e.category === "women's clothing"
        );
        setProducts(dataFilter);
        setLoad(false);
      });
  }, []);

  return (
    <div className="containerRow">
      {" "}
      {load ? <LoaderClothes /> : <ItemList dataItems={products} />}
    </div>
  );
};

export default ItemListContainer;
