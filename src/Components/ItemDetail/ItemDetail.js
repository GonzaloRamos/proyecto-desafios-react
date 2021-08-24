import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      {" "}
      <div className="card">
        <img src={item.image} alt="sarasa" />

        <div className="containerCard">
          <div>
            <h2 className="tituloCard">{item.title}</h2>
          </div>
          <div className="detalle">
            <p>{item.description}</p>

            <ItemCount
              stock={5}
              initial={1}
              onAdd={() => {
                console.log("Console log de onAdd");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
