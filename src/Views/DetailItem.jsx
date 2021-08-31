import React, {Fragment} from "react";
import ItemDetailContainer from "../Components/ItemDetailCointainer/ItemDetailContainer";
import { useParams } from "react-router";

//Componentes
import NavBar from "../Components/NavBar/NavBar";

const DetailItem = () => {

  let {id} = useParams();
  console.log(id)

  return (
    <Fragment>
      <NavBar/>
      <ItemDetailContainer itemID={id}></ItemDetailContainer>
    </Fragment>
  );
};

export default DetailItem;
