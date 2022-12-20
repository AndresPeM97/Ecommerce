import React, { useContext } from "react";
import {useParams} from "react-router-dom"
import {CarritoContext} from "../contexts/CarritoContext"
import {ProductoContext} from "../contexts/ProductoContext"
const ProductoDetails = () => {
    const {id} = useParams();
    const {productos} = useContext(ProductoContext);
    const {addToCarrito} = useContext(CarritoContext);

    const product = productos.find((item) => {
        return item.id === parseInt(id);
    });

    //SI aun no carga o no encuentra el producto seleccionado

    if(!product){
        return(
            <section className="text-center" style={{height:1000+"px" ,fontSize:50+"px"}}>
                Cargando...
            </section>
        )
    }

    const {title, price, description, image} = product;


    //imprime los datos mas relevantes del articulo consultado
    return (
        <section style={{fontSize:50+"px"}}>
            <div className="container">
                <div className="container row pt-5">
                    <div className="col-5">
                        <img src={image} style={{height:500+"px", width:450+"px"}} />
                    </div>
                    <div className="col ps-5">
                        <p className="fs-1 text-light">{title}</p>
                        <p className="fs-2 text-warning">${price}</p>
                        <p className="fs-4 text-secondary">{description}</p>
                        <button className="btn btn-success" onClick={() => addToCarrito(product, product.id)}>Añadir al carrito</button>
                    </div>
                    

                </div>
        
            </div>
        </section>
    );
};

export default ProductoDetails;