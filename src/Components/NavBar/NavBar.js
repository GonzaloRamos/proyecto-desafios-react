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
            <h1 className="titleNavBar">Clothes Market</h1>
          </Menu.Item>
        </Link>

        <Link to="/category/men's clothing">
          <Menu.Item
            name="Ropa para hombres"
            active={activeItem === "Remeras"}
            onClick={this.handleItemClick}
          >
            Men's Clothes
          </Menu.Item>
        </Link>
        <Link to="/category/women's clothing">
          <Menu.Item
            name="Ropa para mujeres"
            active={activeItem === "Medias"}
            onClick={this.handleItemClick}
          >
            Women's Clothes
          </Menu.Item>
        </Link>
        <Link to="/category/jewelery">
          <Menu.Item
            name="Joyerias"
            active={activeItem === "Jeans"}
            onClick={this.handleItemClick}
          >
            Jewelery
          </Menu.Item>
        </Link>
        <Link to="cart">
          <Menu.Item>
            <CartWidget />
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
