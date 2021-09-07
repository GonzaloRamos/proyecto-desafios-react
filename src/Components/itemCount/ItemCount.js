import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const ItemCount = ({ stockItem, setStock, initial = 0, onAdd }) => {
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
      <h4>Item's you will buy : {count} </h4>
      <h5>Available stock: {stockItem}</h5>

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
