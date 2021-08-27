import React, { Fragment } from "react";

import Item from "../Item/Item";

const ItemList = ({ dataItems }) => {
  return (
    <Fragment>
      {dataItems.map((item) => {
        return <Item data={item} />;
      })}
    </Fragment>
  );
};

export default ItemList;
