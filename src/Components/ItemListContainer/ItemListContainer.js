import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Componentes
import ItemList from "../ItemList/ItemList";
import LoaderClothes from "../Loader/LoaderClothes";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const dataFilter = categoryID
          ? data.filter((e) => e.category === categoryID)
          : data.filter(
              (e) =>
                e.category === "men's clothing" ||
                e.category === "jewelery" ||
                e.category === "women's clothing"
            );
        setProducts(dataFilter);
        setLoad(false);
      });
  }, [categoryID]);

  return (
    <section className="itemListContainer">
      {" "}
      {load ? <LoaderClothes /> : <ItemList dataItems={products} />}
    </section>
  );
};

export default ItemListContainer;
