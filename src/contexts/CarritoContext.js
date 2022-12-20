import React, {createContext, useState, useEffect} from "react";
import CarritoItem from "../components/CarritoItem";

export const CarritoContext = createContext();

const CarritoProvider = ({children}) => {

    const [Carrito, setCarrito] = useState([]);
    const [itemCantidad, setItemCantidad]= useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = Carrito.reduce((acumulador, itemActual) => {
            return (acumulador + itemActual.price * itemActual.amount);
        }, 0);
        setTotal(total);
    });

    useEffect(() => {
        if(Carrito){
            const cantidad = Carrito.reduce((acumulador, itemActual) => {
                return acumulador + itemActual.amount;
            }, 0);
            setItemCantidad(cantidad);
        }
    }, [Carrito]);

    const addToCarrito = (producto,id) =>{
        const nItem = {...producto, amount:1}
        const CarritoItem = Carrito.find((item) => {
            return item.id === id;
        });
        console.log(CarritoItem);
        if(CarritoItem){
            const nCarrito = [...Carrito].map(item => {
                if (item.id === id){
                    return {...item, amount: CarritoItem.amount+1}
                } else {
                    return item;
                }
            });
            setCarrito(nCarrito);
        } else {
            setCarrito([...Carrito, nItem]);
        }
    };

    const removeCarrito = (id) => {
        const newCarrito = Carrito.filter(item => {
            return item.id !== id;
        });
        setCarrito(newCarrito);
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const incrementarCarrito =(id) => {
        const CarritoItem = Carrito.find(item => item.id === id);
        addToCarrito(CarritoItem, id);
        
    };

    const decrementarCarrito = (id) => {
        const CarritoItem = Carrito.find((item) => {
            return item.id === id;
        });
        if (CarritoItem){
            const nCarrito = Carrito.map(item => {
                if (item.id === id) {
                    return {...item, amount:CarritoItem.amount - 1}
                }
                else {
                    return item;
                }
            });
            setCarrito(nCarrito);
        }
        if (CarritoItem.amount < 2) {
            removeCarrito(id);
         }
        
    }


    return (<CarritoContext.Provider 
    value={{Carrito, 
    addToCarrito, 
    removeCarrito, 
    limpiarCarrito, 
    incrementarCarrito, 
    decrementarCarrito,
    itemCantidad,
    total
    }}
    >
        {children}
    </CarritoContext.Provider>);
};

export default CarritoProvider;