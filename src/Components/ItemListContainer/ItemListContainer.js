import React from "react";
import "./ItemListContainer.css";
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
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
