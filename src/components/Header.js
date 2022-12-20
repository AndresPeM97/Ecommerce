import React, { useContext, useEffect, useState } from "react";

import {IoMdArrowForward} from "react-icons/io"

import {BsBag, BsFillTrash2Fill} from "react-icons/bs"
import { CarritoContext } from "../contexts/CarritoContext";
import CarritoItem from "./CarritoItem";
import {Link} from "react-router-dom"

const Header = ({setToken}) => {

    const logOutHandler = () => {
        //setToken("");
        localStorage.clear();
        window.location.replace('');
    }

    const [isActive, setIsActive] = useState(false);

    console.log(useContext(CarritoContext));
    const {Carrito, limpiarCarrito, itemCantidad, total} = useContext(CarritoContext);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
    })

    return (
        <div className="container-fluid pb-5">
            <nav className={`navbar ${isActive ? 'bg-primary' : 'bg-light'} fixed-top`}>
        <div className="container-fluid row">
            <div className="col-10">
                <Link to={`/`} className="navbar-brand">Ecommerce</Link>
            </div>
            <div className="col-1 text-dark">
                <button className="navbar-toggler" type="button" onClick={logOutHandler}>LogOut</button>
            </div>
          <div className="col align-self-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="badge rounded-pill bg-secondary">{itemCantidad}</span>
            <BsBag></BsBag>
          </button>
          </div>
          
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Carrito de compras ({itemCantidad})</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end">
                {
                    Carrito.map(item =>{
        
                        return (
                            <CarritoItem item ={item} key ={item.id} />        
                        );
                        
                    })
                }
                </ul>
                
                <div className="container">
                    <div className="row">
                        <div className="col-10 align-self-start">
                        <span>Total: $</span>{`${parseFloat(total).toFixed(2)}`}
                        </div>
                        <div className="col align-self-end btn bg-danger">
                            <BsFillTrash2Fill onClick={() => limpiarCarrito()}></BsFillTrash2Fill>
                        </div>
                    </div>
                </div>

                <div className="container text-bg-info text-center" style={{height:5+"%" }}>
                    <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                        Ver carrito
                    </Link>
                </div>

                <div className="container text-bg-dark text-center" style={{height:5+"%"}}>
                <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    Checkout
                </Link>
                </div>

                
            </div>
            
          </div>
        </div>
      </nav>
    </div>
        
          );
};

export default Header