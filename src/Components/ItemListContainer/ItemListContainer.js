import React from "react";
import "./ItemListContainer.css";

import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = ({ imagen, altImagen, nombre, detalle }) => {
  return (
    <div className="card">
      <img src={imagen} alt={altImagen} />

      <div className="containerCard">
        <div>
          <h2 className="tituloCard">{nombre}</h2>
        </div>
        <div className="detalle">
          <p>{detalle}</p>

          <ItemCount stock={5} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
