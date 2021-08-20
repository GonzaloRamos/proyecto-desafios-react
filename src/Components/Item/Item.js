import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="sarasa" />

      <div className="containerCard">
        <div>
          <h2 className="tituloCard">{data.title}</h2>
        </div>
        <div className="detalle">
          <p>{data.description}</p>

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
  );
};

export default Item;
