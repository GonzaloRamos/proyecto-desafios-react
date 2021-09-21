import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoaderClothes from "../Loader/LoaderClothes";

//Firebase
import dataBaseFirestore from "../../FireBase/FireBase";

const ItemDetailContainer = ({ itemID }) => {
  const [item, setItem] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const docRef = dataBaseFirestore.collection("products").doc(itemID);

      await docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            setItem({ ...doc.data(), id: doc.id });
          } else {
            alert("No such document!");
          }
        })
        .catch((error) => {
          alert("Error getting document:", error);
        });

      setLoad(false);
    };
    getProduct();
  }, [itemID]);

  return load ? <LoaderClothes /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
