import React from "react";

import Item from "../Item/Item";

const ItemList = ({ dataProductos }) => {
  return (
    <div className="containerRow">
      <div>
        {dataProductos.map((producto) => {
          return <Item data={producto} key={producto.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
