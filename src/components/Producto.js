import React, { useContext } from "react";
import {Link} from "react-router-dom"
import {BsPlus, BsEyeFill} from "react-icons/bs";
import { CarritoContext } from "../contexts/CarritoContext";

const Producto = ({producto}) => {

    const { addToCarrito } = useContext(CarritoContext);

    const {id, image, category, title, price} = producto;

    return (
    <div className="col pt-4" key={id} >
        <div className="card" style={{width:15+"em", height:32+"em"}}>
        <Link to={`/producto/${id}`}>
        <img src={image} className="card-img-top" style={{height:15+"em"}} alt="..."/>
        </Link>
            <div className="card-body">
                <Link to={`/producto/${id}`}><h5 className="card-title">{title}</h5></Link>
                <p className="card-text">${price}</p>
                <div className="row align-bottom position-absolute bottom-0 start-0">
                    <div className="col">
                        <Link to={`/producto/${id}`} className="btn btn-info">Ver en detalle</Link>
                    </div>
                    <div className="col">
                        <button onClick={ () => addToCarrito(producto, id) } className="btn btn-secondary">Añadir al carrito</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>);
};

export default Producto