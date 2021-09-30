import React, { Fragment } from "react";

//Componentes
import NavBar from "../Components/NavBar/NavBar";
import Cart from "../Components/Cart/Cart";

const CartView = () => {
  return (
    <Fragment>
      <NavBar></NavBar>

      <Cart></Cart>
    </Fragment>
  );
};

export default CartView;
