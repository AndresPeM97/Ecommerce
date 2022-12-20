import React, { useContext } from "react";
//Importar iconos
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//Importar contexto del carrito
import { CarritoContext } from "../contexts/CarritoContext";

import { Link } from "react-router-dom";

const CarritoItem = ({item}) => {
    //elementos recibidos de el contexto de carrito
    const {removeCarrito, incrementarCarrito, decrementarCarrito} = useContext(CarritoContext);
    const {id, title, image, price, amount} = item;

    //retorna cada elemento del carrito de compars, incluyendo sus funciones para incrementar y borrar elementos
    return (
        <li className="list-item pt-2">
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-3">
                    <Link to={`/producto/${id}`}>
                        <img src={image} height="70px"/>
                    </Link>
                </li>
                <li className="list-group-item col-7">{title}</li>
                <li className="list-group-item col-2"><IoMdClose  type="button" onClick={() => removeCarrito(id)}></IoMdClose></li> 
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-4">
                    <IoMdRemove onClick={()=>decrementarCarrito(id)} type="button"  className="col-3"></IoMdRemove> 
                    {amount} 
                    <IoMdAdd onClick={()=>incrementarCarrito(id)} type="button" className="col-3"></IoMdAdd>
                </li>
                <li className="list-group-item col-4">Precio</li>
                <li className="list-group-item col-4">${price}</li>
            </ul>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-4"></li>
                <li className="list-group-item col-4">Total</li>
                <li className="list-group-item col-4">{`$${parseFloat(amount*price).toFixed(2)}`}</li>
            </ul>
        </li>
        
    );
};

export default CarritoItem