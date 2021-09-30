import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Firebase data || FireStore
import dataBaseFirestore from "../../FireBase/FireBase";

//Componentes
import ItemList from "../ItemList/ItemList";
import LoaderClothes from "../Loader/LoaderClothes";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      await dataBaseFirestore
        .collection("products")
        .onSnapshot((querySnapshot) => {
          const datos = [];
          querySnapshot.forEach((product) => {
            datos.push({ ...product.data(), id: product.id });
          });

          const documentFilter = categoryID
            ? datos.filter((datos) => datos.category === categoryID)
            : datos.filter(
                (datos) =>
                  datos.category === "men's clothing" ||
                  datos.category === "jewelery" ||
                  datos.category === "women's clothing"
              );

          setProducts(documentFilter);
          setProducts(documentFilter);
        });
    };
    setTimeout(() => {
      obtenerDatos();
      setLoad(false);
    }, 2000);
  }, [categoryID]);
  return (
    <section className="itemListContainer">
      {" "}
      {load ? <LoaderClothes /> : <ItemList dataItems={products} />}
    </section>
  );
};

export default ItemListContainer;
