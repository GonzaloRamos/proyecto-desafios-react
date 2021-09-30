import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
//Componentes
import LoaderClothes from '../Loader/LoaderClothes';
import ItemsCategory from '../ItemsCategory/ItemsCategory';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const CategoryContainer = () => {

  
    return (
      <div className="containerRow">
        {" "}
       <ItemListContainer></ItemListContainer>
      </div>)

    }

export default CategoryContainer
