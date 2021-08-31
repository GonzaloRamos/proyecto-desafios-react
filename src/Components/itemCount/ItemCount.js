import React, { useState, Fragment } from "react";
import { Button, Icon } from "semantic-ui-react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stockProduct, setStockProduct] = useState(stock);

  const increment = () => {
    setCount(count + 1);
    setStockProduct(stockProduct - 1);

    if (stockProduct <= 0) {
      setCount(count);
      setStockProduct(stockProduct);
      alert("¡No more stock available!");
    }
  };

  const decrement = () => {
    setCount(count - 1);
    setStockProduct(stockProduct + 1);

    if (count <= 0) {
      setCount(count);
      setStockProduct(stockProduct);
      alert("¡You got nothing in the cart!");
    }
  };

  const add = () => {
    onAdd(count);
    console.log(`Agregaste ${count} al carrito`);
  };

  return (
    <Fragment>
      <h4>Item's you will buy : {count} </h4>
      <h5>Available stock: {stockProduct}</h5>

      <Button primary onClick={increment}>
        +
      </Button>
      <Button secondary onClick={decrement}>
        -
      </Button>

      <Button icon onClick={add}>
        <Icon name="add to cart" />
      </Button>
    </Fragment>
  );
};

export default ItemCount;
