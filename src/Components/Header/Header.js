import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div className="menus">
                <a href="/porduct">Product</a>
                <a href="/contact">Contact</a>
                <a href="/shopping">Shopping</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    );
};

export default Header;