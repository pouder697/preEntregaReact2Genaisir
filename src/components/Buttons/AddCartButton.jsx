import React from "react";
import '../Buttons/buttonsstyles.css';
import cart from '../../assets/cart.svg';

function AddCartButton() {
    return(
        <button type="button" className="button">
          Agregar   <img id='cart' src={cart} alt="cart-widget" />
        </button>
    )

}

export default AddCartButton;