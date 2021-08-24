import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Link to="/">
          <Menu.Item>
            {" "}
            <h1 className="titleNavBar">Tienda de ropa</h1>
          </Menu.Item>
        </Link>

        <Link to="/category">
          <Menu.Item
            name="Ropa para hombres"
            active={activeItem === "Remeras"}
            onClick={this.handleItemClick}
          >
            Ropa para hombres
          </Menu.Item>
        </Link>

        <Menu.Item
          name="Ropa para mujeres"
          active={activeItem === "Medias"}
          onClick={this.handleItemClick}
        >
          Ropa para mujeres
        </Menu.Item>

        <Menu.Item
          name="Joyerias"
          active={activeItem === "Jeans"}
          onClick={this.handleItemClick}
        >
          Joyerias
        </Menu.Item>

        <Menu.Item>
          <CartWidget />
        </Menu.Item>
      </Menu>
    );
  }
}
