import React, {useContext, useState} from "react";
import Producto from "../components/Producto";

import { ProductoContext } from "../contexts/ProductoContext";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

const Home = () => {
    const {productos} = useContext(ProductoContext);
    //console.log(productos);

    //Busca items cuyo nombre y/o categoria sean similares a lo que se escriba en el buscador
    const [filtro="", setFiltro] = useState("")
    let ProductosFiltrados;
    //Si hay texto en el formulario, hace el filtrado de acuerdo a lo que escriba el usuario
    if (filtro !==""){
        ProductosFiltrados = productos.filter(item => {
            console.log((item.category).search(filtro))
        return ((item.category).toLowerCase().search(filtro.toLowerCase()) === 0 || (item.title).toLowerCase().search(filtro.toLowerCase())===0);
    });
    }
    //Si no hay texto, muestra todos 
    else {
        ProductosFiltrados = productos;
    }

    //Realiza el filtrado y envia los datos filtrados
    return (
    <div className="container-fluid">
        <div className="pt-5 pt-md-4">
                    <Hero></Hero>
        </div>

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