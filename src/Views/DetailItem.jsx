import React from "react";
import ItemDetailContainer from "../Components/ItemDetailCointainer/ItemDetailContainer";
import { useParams } from "react-router";

//Componentes
import NavBar from "../Components/NavBar/NavBar";

const DetailItem = () => {

  let {id} = useParams();
  console.log(id)

  return (
    <div>
      <NavBar/>
      <ItemDetailContainer itemID={id}></ItemDetailContainer>
    </div>
  );
};

export default DetailItem;
