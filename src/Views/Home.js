import React from "react";
import { Fragment } from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <Fragment>
      <Header />

      <ItemListContainer />
    </Fragment>
  );
};

export default Home;
