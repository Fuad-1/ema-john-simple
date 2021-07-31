import React from 'react';
import logo from './../../images/logo.png' ;
import './Header.css' ;


// rsc> setting up logo, navigation and nav menu
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Over Review</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;