import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item>
          {" "}
          <h1 className="titleNavBar">Tienda de ropa</h1>
        </Menu.Item>
        <Menu.Item
          name="Remeras"
          active={activeItem === "Remeras"}
          onClick={this.handleItemClick}
        >
          Remeras
        </Menu.Item>

        <Menu.Item
          name="Medias"
          active={activeItem === "Medias"}
          onClick={this.handleItemClick}
        >
          Medias
        </Menu.Item>

        <Menu.Item
          name="Jeans"
          active={activeItem === "Jeans"}
          onClick={this.handleItemClick}
        >
          Jeans
        </Menu.Item>

        <Menu.Item>
          <CartWidget />
        </Menu.Item>
      </Menu>
    );
  }
}
