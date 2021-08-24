import React from "react";

import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ dataItems }) => {
  return (
    <div className="containerRow">
      {dataItems.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
