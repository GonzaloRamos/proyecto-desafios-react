import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

//Componentes
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header title="Bienvenidxs a la tienda (que todavia no se el nombre)" />
        </div>
        <div className="containerRow">
          <ItemListContainer
            nombre="WhatsApp"
            detalle="Probando el props 1"
            imagen="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
            altImagen="alt de imagen 1"
          />
          <ItemListContainer
            nombre="Remera"
            detalle="Probando el props 2, funciona 🔥"
            imagen="https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_2.jpg"
            altImagen="alt de imagen 1"
          />
          <ItemListContainer
            nombre="Buzo"
            detalle="Algun Buzo de internet"
            imagen="https://dehoynopasa.com.ar/wp-content/uploads/buzos-4.jpg"
            altImagen="alt de imagen 1"
          />
          <ItemListContainer
            nombre="Hola"
            detalle="Algun detalle"
            imagen="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
            altImagen="alt de imagen 1"
          />
        </div>
      </div>
    );
  }
}

export default App;
