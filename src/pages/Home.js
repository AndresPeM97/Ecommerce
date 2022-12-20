import React, {useContext} from "react";
import Producto from "../components/Producto";

import { ProductoContext } from "../contexts/ProductoContext";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

const Home = () => {
    const {productos} = useContext(ProductoContext);
    //console.log(productos);

    const ProductosFiltrados = productos.filter(item => {
        return (item.category === "electronics");
    });

    return (
    <div className="container-fluid">
        <Hero></Hero>
        <div className="container-fluid ps-5">
            <div className="container-fluid row">
                {productos.map(producto => {
                    return (<Producto producto={producto} key={producto.id}></Producto>);
                })}
            </div>
        </div>
        
    </div>);
};

export default Home;