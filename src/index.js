import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductoProvider from './contexts/ProductoContext';
import CarritoProvider from './contexts/CarritoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <ProductoProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductoProvider>
  </CarritoProvider>
    
    
);


