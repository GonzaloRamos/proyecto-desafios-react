import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Rating = ({ rateItem }) => {
  const rate = Math.floor(rateItem);
  const filledArray = new Array(rate).fill(<FontAwesomeIcon icon={faStar} />);

  return (
    <>
      {filledArray.map((e) => {
        return <div key={uuidv4()}> {e} </div>;
      })}
    </>
  );
};

export default Rating;
