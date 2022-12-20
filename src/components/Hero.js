import React from "react";
//Banner
const Hero = () => {
    return(
    <div className="w-auto" style={{height:20+"em",backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/013/934/063/non_2x/merry-christmas-banner-winter-landscape-background-snow-product-display-cylindrical-shape-vector.jpg")`}}>
        <div className="text-primary fs-1 fw-bold pt-5 ps-5" style={{height:40+"%"}}>
            OFERTAS DE INVIERNO
        </div>
        <div className="text-secondary fs-4 fs-md-2 fw-semibold ps-5" style={{width:50+"%"}}>
            APROVECHA LOS PRECIOS DE INVIERNO EN TODOS NUESTROS PRODUCTOS
        </div>
    </div>);
};

export default Hero