import React from "react";
import { Link } from "react-router-dom";

const ViewDetailsBtn = ({ nombre, precio, id, imagen, categoria }) => {
  return (
    <Link to={`/detalle/${id}`}>
      <button type="button" className="button">
        Ver Detalle
      </button>
    </Link>
  );
}

export default ViewDetailsBtn;
