import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
    if (stock <= count) {
      setCount(count);
      alert("¡No hay mas stock!");
    }
  };

  const decrement = () => {
    setCount(count - 1);

    if (count <= 1) {
      setCount(count);
    }
  };

  return (
    <div>
      <h4>Cantidad que vas a comprar : {count} </h4>
      <h5>Stock disponible: {stock}</h5>

      <Button primary onClick={increment}>
        +
      </Button>
      <Button secondary onClick={decrement}>
        -
      </Button>

      <Button icon onClick={onAdd}>
        <Icon name="cart" />
      </Button>
    </div>
  );
};

export default ItemCount;
