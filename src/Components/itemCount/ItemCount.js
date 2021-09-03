import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const ItemCount = ({ stockItem, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stock, setStock] = useState(stockItem);

  const increment = () => {
    setCount(count + 1);
    setStock(stock - 1);

    if (stock <= 0) {
      setCount(count);
      setStock(stock);
      alert("¡No more stock available!");
    }
  };

  const decrement = () => {
    setCount(count - 1);
    setStock(stock + 1);

    if (count <= 0) {
      setCount(count);
      setStock(stock);
      alert("¡You got nothing in the cart!");
    }
  };

  return (
    <Fragment>
      <h4>Item's you will buy : {count} </h4>
      <h5>Available stock: {stock}</h5>

      <Button primary onClick={increment}>
        +
      </Button>
      <Button secondary onClick={decrement}>
        -
      </Button>

      <Button icon>
        <Icon name="add to cart" onClick={() => onAdd(count)} />
      </Button>
    </Fragment>
  );
};

export default ItemCount;
