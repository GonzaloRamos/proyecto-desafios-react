import React, { Fragment } from "react";

import Item from "../Item/Item";

const ItemList = ({ dataItems }) => {
  return (
    <Fragment>
      {dataItems.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </Fragment>
  );
};

export default ItemList;
