import React, { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stockItem, setStock, initial = 0, onAdd, price }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
    setStock(stockItem - 1);

    if (stockItem <= 0) {
      setCount(count);
      setStock(stockItem);
      alert("¡No more stock available!");
    }
  };

  const decrement = () => {
    setCount(count - 1);
    setStock(stockItem + 1);

    if (count <= 0) {
      setCount(count);
      setStock(stockItem);
      alert("¡You got nothing in the cart!");
    }
  };

  return (
    <Fragment>
      <div className="itemCount__description">
        <h5>Item's you will buy : {count} </h5>
        <h5>Available stock: {stockItem}</h5>
        <h5>
          Total Price: <span>&#36;{(price * count).toFixed(2)}</span>{" "}
        </h5>
      </div>
      <button onClick={increment} className="btn-itemCount__increment">
        +
      </button>
      <button onClick={decrement} className="btn-itemCount__decrement">
        -
      </button>

      <button className="btn-itemCount__cart">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={() => {
            onAdd(count);
          }}
        />{" "}
      </button>
    </Fragment>
  );
};

export default ItemCount;
