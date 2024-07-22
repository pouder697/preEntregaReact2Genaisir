import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  useEffect(() => {
    const findProduct = productos.find((i) => i.id === parseInt(id));

    setProductoSeleccionado(findProduct);
  }, []);

  return (
    <div>
      <p>Detalle del producto {productoSeleccionado.nombre}</p>
      <Item
        key={productoSeleccionado.id}
        id={productoSeleccionado.id}
        nombre={productoSeleccionado.nombre}
        precio={productoSeleccionado.precio}
        categoria ={productoSeleccionado.categoria}
      />
    </div>
  );
};

export default ItemDetail;
