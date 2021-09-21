import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import CartList from "../CartList/CartList";
import Form from "../Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//FireStore
import firebase from "firebase/app";
import dataBaseFirestore from "../../FireBase/FireBase";
import { faFrownOpen } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
  const { cart, totalPrice, removeItem, clear } = useCartContext();

  const purchase = async (buyerName, buyerPhone, buyerEmail) => {
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
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <Fragment>
      {cart.length === 0 ? (
        <div className="cartContainer__noItems">
          <h3> ¡No items in cart!</h3>
          <FontAwesomeIcon icon={faFrownOpen} />
          <Link to="/">
            <button className="btn-primary">View Products</button>
          </Link>
        </div>
      ) : (
        <div className="cartContainer__Items">
          {cart.map((item) => {
            return (
              <CartList
                cartElement={item}
                removeItem={removeItem}
                itemImage={item.image}
                key={item.id}
              />
            );
          })}

          <footer className="cart__footer">
            <div className="cart__footer-summary">
              <span className="item__footer__price">
                {" "}
                Total Price: ${totalPrice()}
              </span>
              <span className="btn-cart__action" onClick={() => clear()}>
                Clear Cart
              </span>
            </div>
            <Form purchase={purchase}></Form>
          </footer>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
