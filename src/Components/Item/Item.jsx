import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Item = ({ data }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={data.image} alt="sarasa" />
      </div>

      <div className="card__container">
        <div className="card__title">
          <h2>{data.title}</h2>
        </div>
        <div className="card__rating">
          <Rating rateItem={data.rating}></Rating>
        </div>
        <div className="buttonContainer">
          <Link to={`/detail/${data.id}`}>
            <button className="btn-item__primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
