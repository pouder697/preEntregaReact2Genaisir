import React from "react";
import '../ItemList/itemliststyles.css';

function ItemList(props) {
    return (
        <li className="productCard">
            <h2>{props.producto}</h2>
            <p>${props.precio}</p>
        </li >
    )
}

export default ItemList