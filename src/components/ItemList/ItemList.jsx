import React from "react";
import Item from "../Item/Item";
import "../ItemList/itemliststyles.css";

const ItemList = ({ productos }) => {
  return (
    <div className="row justify-content-between">
      {
        productos.map((i) => {
          return (
            <Item
              key={i.id}
              id={i.id}
              nombre={i.nombre}
              precio={i.precio}
              imagen={i.imagen}
              categoria={i.categoria}
            />
          );
        })
      }
    </div>
  );
};

export default ItemList;
