import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/js/bootstrap"
import "axios"



import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//paginas
import Home from "./pages/Home";
import ProductoDetails from "./pages/ProductoDetails";
//componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Login} from './components/Login';


function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null); 
  
  return <div className='container-fluid'>
    <Router>
      <Header setToken={setToken}>
      </Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={token ? <Home></Home>:<Login token = {token} setToken={setToken}/>}></Route>
        <Route path='/producto/:id' element={<ProductoDetails></ProductoDetails>}></Route>
      </Routes>
        <Footer></Footer>
    </Router>
  </div>;
}

export default App;
