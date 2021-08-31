import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBarTwo = () => {
    return (
        <Fragment>
            <div className="menu-btn">
            <span className="menu-btn__burger"> <FontAwesomeIcon icon= {faBars}/> </span>
            </div>

        <nav className="nav">
        
        <ul className="menu-nav">
            <li className="menu-nav__item ">
               <NavLink to="/category/men's clothing" className="menu-nav__link" activeClassName="active"> Men's Clothes </NavLink></li>
            <li className="menu-nav__item">
               <NavLink to="/category/women's clothing"> Women's Clothes </NavLink></li>
            <li className="menu-nav__item">
               <NavLink to="/category/jewelery"> Jewerly </NavLink> </li>
            <li className="menu-nav__item"> <FontAwesomeIcon icon = {faShoppingCart}/> </li>
           
        </ul>
        </nav>
        </Fragment>
    )
}

export default NavBarTwo
