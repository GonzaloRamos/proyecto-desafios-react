import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CartList = ({ cartElement, removeItem, itemImage }) => {
  return (
    <Fragment>
      <article className="item">
        <div className="item__container">
          <figure className="item__image">
            <img src={itemImage} alt="sarasa" />
          </figure>
          <div className="item__information">
            <h2 className="item__information__title">{cartElement.title}</h2>

            <div className="item__information-main">
              <p>{cartElement.description.substring(0, 29) + "..."}</p>
            </div>
            <div>Units: {cartElement.quantity}</div>
          </div>
          <div className="item__footer">
            <div className="item__footer__price">
              {"$ " + (cartElement.price * cartElement.quantity).toFixed(2)}

              {cartElement.quantity}
            </div>
          </div>
        </div>

        <div className="item__actions">
          <ul className="item__actions-container">
            <li>
              {" "}
              <span
                onClick={() => {
                  removeItem(cartElement.id);
                }}
                className="btn-cart__action"
              >
                Delete
              </span>
            </li>
            <li>
              <Link to="/">
                <span className="btn-cart__action">See more products </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </Fragment>
  );
};

export default CartList;
