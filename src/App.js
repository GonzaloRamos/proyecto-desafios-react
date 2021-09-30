import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartView from "./Views/CartView";

//Views
import Home from "./Views/Home";
import DetailItem from "./Views/DetailItem";
import Category from "./Views/Category";

//Context
import { CartProvider } from "./Components/CartContext/CartContext";
import PurchaseView from "./Views/PurchaseView";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <CartProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" component={DetailItem} />
              <Route path="/category/:categoryID" component={Category} />
              <Route path="/cart" component={CartView} />
              <Route path="/purchase" component={PurchaseView} />
            </Switch>
          </Router>
        </CartProvider>
      </Fragment>
    );
  }
}

export default App;
