import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import clotheslogo from '../../assets/clotheslogo.jpg'
import '../NavBar/navbarstyles.css';

function NavBar() {
    return (
        <nav className='navbarContainer'>

            <ul className='navbarList'>
                <img className='clothesLogo' src={clotheslogo} alt="logo del ecommerce de venta de ropa" />
                <li className='navbarItem'>
                    <a className='navbarLink' href="">HOME</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">PRODUCTOS</a>
                </li>
                <li className='navbarItem'>
                    <a className='navbarLink' href="">CONTACTOS</a>
                </li>
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar