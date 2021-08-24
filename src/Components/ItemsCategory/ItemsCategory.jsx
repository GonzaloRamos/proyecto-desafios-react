import React from 'react'

const ItemsCategory = ({ data }) => {
    return (
      <div className="card">
        <img src={data.image} alt="sarasa" />
  
        <div className="containerCard">
          <div>
            <h2 className="tituloCard">{data.title}</h2>
          </div>
        </div>
      </div>
    );
  };

  export default ItemsCategory
