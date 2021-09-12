import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoaderClothes from "../Loader/LoaderClothes";

//Firebase
import { collection, query, where, getDocs } from "@firebase/firestore";
import dataBaseFirestore from "../../FireBase/FireBase";

const ItemDetailContainer = ({ itemID }) => {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const getItem = async () => {
      const q = query(
        collection(dataBaseFirestore, "products"),
        where("id", "==", parseInt(itemID))
      );

      const item = (await getDocs(q)).docs;
      setItem(item[0].data());
      setLoad(false);
    };
    getItem();
  }, [itemID]);

  return load ? <LoaderClothes /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
