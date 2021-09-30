import React from "react";
import { Fragment } from "react";
import Header from "../Components/Header/Header";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

const Category = () => {
  return (
    <Fragment>
      <Header></Header>
      <ItemListContainer></ItemListContainer>
    </Fragment>
  );
};

export default Category;
