import React from "react";

import Item from "../Item/Item";

const ItemList = ({ dataProductos }) => {
  return (
    <div className="containerRow">
      <div>
        {dataProductos.map((dataProductos) => {
          return <Item data={dataProductos} key={dataProductos.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
