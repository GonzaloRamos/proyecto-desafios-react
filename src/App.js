import React from "react";
import { Fragment } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Views
import Home from "./Views/Home";
import DetailItem from "./Views/DetailItem";
import Category from "./Views/Category";
import Cart from "./Views/Cart";

//Componentes

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" component={DetailItem} />
            <Route path="/category/:categoryID" component={Category} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
