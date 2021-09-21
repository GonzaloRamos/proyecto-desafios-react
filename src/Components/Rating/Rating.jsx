import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Rating = ({ rateItem, idItem }) => {
  let rate = Math.floor(rateItem);
  return (
    <Fragment>{Array(rate).fill(<FontAwesomeIcon icon={faStar} />)}</Fragment>
  );
};

export default Rating;
