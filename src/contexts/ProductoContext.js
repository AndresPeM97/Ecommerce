import React, {createContext, useState, useEffect} from "react";

//crear cotnexto

export const ProductoContext = createContext();

const ProductoProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    useEffect(()=> {

        const fetchProductos = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductos(data);
        };
        fetchProductos();

    }, [])
    return <ProductoContext.Provider value={{productos}}>{children}</ProductoContext.Provider>;
};

export default ProductoProvider;