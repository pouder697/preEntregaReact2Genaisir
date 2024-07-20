import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import clotheslogo from '../../assets/clotheslogo.jpg'
import '../NavBar/navbarstyles.css';

function NavBar() {
    return (
        <nav className='navbar'>

            <ul className='navbarNav'>
                <img className='clothesLogo' src={clotheslogo} alt="logo del ecommerce de venta de ropa" />
                <li className='navItem'>
                    <a className='navLink' href="">Home</a>
                </li>
                <li className='navItem'>
                    <a className='navLink' href="">Productos</a>
                </li>
                <li className='navItem'>
                    <a className='navLink' href="">Contacto</a>
                </li>
                <CartWidget />
            </ul>

        </nav>
    )
}

export default NavBar