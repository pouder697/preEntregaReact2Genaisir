import React from "react";
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemlistcontainerstyles.css';

function ItemListContainer() {
    return (
        <ul className="listContainer">
            <ItemList className='listContainer' producto='Hoodie' precio='40.000' />
            <ItemList producto='Pantalon' precio='20.000' />
            <ItemList producto='Remera' precio='15.000' />
        </ul>
    )
}

export default ItemListContainer