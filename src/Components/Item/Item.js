import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <Link to={`/detail/${data.id}`} className="card">
      <div className="card__image">
        <img src={data.image} alt="sarasa" />
      </div>

      <div className="card__container">
        <div className="card__title">
          <h2>{data.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Item;
