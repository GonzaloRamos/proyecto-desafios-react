import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
//Componentes
import LoaderClothes from '../Loader/LoaderClothes';
import ItemsCategory from '../ItemsCategory/ItemsCategory';

const CategoryContainer = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    const category = useParams();
    console.log (category)

  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoad(false);
        });
    }, []);
  
    return (
      <div className="containerRow">
        {" "}
        {load ? <LoaderClothes /> : <ItemsCategory dataItems={products} />}
      </div>)

    }

export default CategoryContainer
