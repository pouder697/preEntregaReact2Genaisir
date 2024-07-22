/* mock de productos para ser renderizados en la app */

const productos = [
    {
        id: 1,
        nombre: "Hoodie Basic Blanco",
        precio: 10.000,
        categoria: "Hoodies",
        imagen: "https://i.postimg.cc/FzFYSdVb/hoodie1.jpg"
    },
    {
        id: 2,
        nombre: "Hoodie Basic Azul Marino",
        precio: 12.000,
        categoria: "Hoodies",
        imagen: "https://i.postimg.cc/cCDrBxFp/hoodie2.jpg"

    },
    {
        id: 3,
        nombre: "Hoodie Basic Negro",
        precio: 12.000,
        categoria: "Hoodies",
        imagen: "https://i.postimg.cc/bYLDhgqm/hoodie3.jpg"
    },
    {
        id: 4,
        nombre: "Jogging Basic Negro",
        precio: 5,
        categoria: "Pantalones",
        imagen: "https://i.postimg.cc/tTpJ0Zw0/pantalon1.jpg"

    },
    {
        id: 5,
        nombre: "Jean Azul",
        precio: 15,
        categoria: "Pantalones",
        imagen: "https://i.postimg.cc/s2px09n9/pantalon2.jpg"

    },
    {
        id: 6,
        nombre: "Jogging Z Negro",
        precio: 35,
        categoria: "Pantalones",
        imagen: "https://i.postimg.cc/Vk0dXcnh/pantalon3.jpg"

    },
    {
        id: 7,
        nombre: "Remera Basic Blanca",
        precio: 8,
        categoria: "Sin Remeras",
        imagen: "https://i.postimg.cc/8P07FCJW/remera1.jpg"

    },
    {
        id: 8,
        nombre: "Remera Basic Negra",
        precio: 8,
        categoria: "Remeras",
        imagen: "https://i.postimg.cc/wBK3Vbkj/remera2.jpg"

    },
    {
        id: 9,
        nombre: "Remera Basic Roja",
        precio: 8,
        categoria: "Remeras",
        imagen: "https://i.postimg.cc/BQ68QF64/remera3.jpg"

    },
];

export default productos;
/*
export default function fetchData() {
    return new Promise(resolve => {
        console.log("hola")
        setTimeout(() => {
            resolve(productos);
        }, 5000);
    });
};
*/