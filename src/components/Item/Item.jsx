import React from "react";

import "../Item/itemstyles.css";
import { Link } from "react-router-dom";
import AddCartButton from "../Buttons/AddCartButton";

const Item = ({ nombre, precio, id, imagen, categoria }) => {
  return (
    <div key={id} className="productCard card col-lg-3 col-md-4 col-sm-12">
      <h4 style={{ justifySelf: "center" }}>{nombre}</h4>
      <br />
      <img id="product-img" src={imagen} />
      <p>Precio: ${precio}</p>
      <AddCartButton />
      <Link to={`/detalle/${id}`}>
        <button className="button">Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
