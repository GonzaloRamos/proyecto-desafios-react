import React, { useState } from "react";
import { useCartContext } from "../Components/CartContext/CartContext";
import Form from "../Components/Form/Form";
import NavBar from "../Components/NavBar/NavBar";
import LoaderCircle from "../Components/Loader/LoaderCircle";
import { Link } from "react-router-dom";

//Firebase
import firebase from "firebase/app";
import dataBaseFirestore from "../FireBase/FireBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-regular-svg-icons";

const PurchaseView = () => {
  const { cart, clear, totalPrice } = useCartContext();
  const [value, setValue] = useState(0);
  const [purchaseID, setPurchaseID] = useState("");
  const [loading, setLoading] = useState(false);

  const purchase = async (buyerName, buyerPhone, buyerEmail) => {
    setValue(1);
    setLoading(true);
    const orders = dataBaseFirestore.collection("orders");
    const newOrder = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail,
      },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };
    await orders
      .add(newOrder)
      .then((doc) => {
        console.log("Document successfully written!", "DOCUMENT ID:", doc.id);
        setLoading(false);
        setPurchaseID(doc.id);
        clear();
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="form-container">
        {loading ? (
          <div className="form">
            {" "}
            <LoaderCircle />{" "}
          </div>
        ) : value === 0 ? (
          <Form purchase={purchase}></Form>
        ) : (
          <div className="purchaseContainer">
            <h3> ¡Thanks for your buy!</h3>
            <FontAwesomeIcon icon={faSmileWink} />
            <p>Your purchase ID is {purchaseID} </p>
            <Link className="btn-cart__purchase" to="/">
              Continue Buying
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default PurchaseView;
