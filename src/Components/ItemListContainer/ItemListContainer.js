import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Firebase data
import { collection, getDocs } from "firebase/firestore";
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
      const datos = await getDocs(collection(dataBaseFirestore, "products"));
      const document = datos.docs.map((documento) => {
        return documento.data();
      });

      const documentFilter = categoryID
        ? document.filter((document) => document.category === categoryID)
        : document.filter(
            (document) =>
              document.category === "men's clothing" ||
              document.category === "jewelery" ||
              document.category === "women's clothing"
          );

      setProducts(documentFilter);
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
