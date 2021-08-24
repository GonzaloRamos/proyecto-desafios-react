import React from "react";
import { Fragment } from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <Fragment>
      <Header title="Bienvenidxs a la tienda (que todavia no se el nombre)" />
      <section>
        <ItemListContainer />
      </section>
    </Fragment>
  );
};

export default Home;
