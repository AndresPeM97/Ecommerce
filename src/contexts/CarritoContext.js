import React, {createContext, useState, useEffect} from "react";
import CarritoItem from "../components/CarritoItem";

export const CarritoContext = createContext();

const CarritoProvider = ({children}) => {

    const [Carrito, setCarrito] = useState([]);
    const [itemCantidad, setItemCantidad]= useState(0);

    const [total, setTotal] = useState(0);

    //Cuenta el total de precio en el carrito
    useEffect(() => {
        const total = Carrito.reduce((acumulador, itemActual) => {
            return (acumulador + itemActual.price * itemActual.amount);
        }, 0);
        setTotal(total);
    });
    //Cuenta el total de elementos en el carrito
    useEffect(() => {
        if(Carrito){
            const cantidad = Carrito.reduce((acumulador, itemActual) => {
                return acumulador + itemActual.amount;
            }, 0);
            setItemCantidad(cantidad);
        }
    }, [Carrito]);

    //Busca el item seleccionado, si existe lo aumenta, si no existe, lo crea
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
    //Borra el item que encuentre dentro del carrito con el id recibido
    const removeCarrito = (id) => {
        const newCarrito = Carrito.filter(item => {
            return item.id !== id;
        });
        setCarrito(newCarrito);
    };

    //borra todo el arreglo del carrito
    const limpiarCarrito = () => {
        setCarrito([]);
    };

    //ejecuta la funcion de añadir al carrito, pero solo recibiendo el id para poder hacerlo desde el carrito
    const incrementarCarrito =(id) => {
        const CarritoItem = Carrito.find(item => item.id === id);
        addToCarrito(CarritoItem, id);
        
    };
    //Reduce la cantidad de elementos contados con ese ID, si se convierte en 0, lo elimina
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

    //Envio del contexto del carrito
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