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

        <ItemListContainer />
      </div>
    );
  }
}

export default App;
