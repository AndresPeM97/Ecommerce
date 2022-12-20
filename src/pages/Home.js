import React, {useContext, useState} from "react";
import Producto from "../components/Producto";

import { ProductoContext } from "../contexts/ProductoContext";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

const Home = () => {
    const {productos} = useContext(ProductoContext);
    //console.log(productos);

    const [filtro="", setFiltro] = useState("")

    let ProductosFiltrados;

    if (filtro !==""){
        ProductosFiltrados = productos.filter(item => {
            console.log((item.category).search(filtro))
        return ((item.category).toLowerCase().search(filtro.toLowerCase()) === 0 || (item.title).toLowerCase().search(filtro.toLowerCase())===0);
    });
    } else {
        ProductosFiltrados = productos;
    }

    return (
    <div className="container-fluid">
        <Hero></Hero>
        <div className=" pt-4">
            <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Escribe el nombre o categoria del producto que deseas buscar"/>
        </div>
        <div className="container-fluid ps-5">
            <div className="container-fluid row">
                {ProductosFiltrados.map(producto => {
                    return (<Producto producto={producto} key={producto.id}></Producto>);
                })}
            </div>
        </div>
        
    </div>);
};

export default Home;