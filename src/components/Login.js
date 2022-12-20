import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Login = () => {

    const [errpr, setError] = useState("")
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    //Consulta los usuarios en FakeStoreApi
    const loginHandler = ({token, setToken}) =>{
        axios( {
            url:"https://fakestoreapi.com/auth/login",
            method:"POST",
            data: {
                username:userName,
                password:password,
            },
        }).then(res=> {
            console.log(res.data.token);
            //setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
            window.location.replace('');
        }).catch(err=>{
            console.log(err.response);
            setError(err.response);
        })
    }

    //Formulario para introducir usuario y contraseñæ
  return (
    <div className='container' style={{height:40+"em", paddingLeft:10+"em", paddingTop:5+"em"}}>  
        <h1>Inicar sesion</h1>
        <form className="row g-3">
        <div className="col-auto">
            <label className="form-label">Usuario (Sugerido: mor_2314)</label>
            <input type="email" value={userName} onChange={(e) => setUserName(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="Usuario"/>
            <button type="submit" onClick={loginHandler} className="btn btn-primary col-6">Ingresar</button>
        </div>
        <div className="col-auto">
            <label className="form-label">Contraseña (Sugerido: 83r5^_)</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
            <Link to="/signin"><button type="submit" className="btn btn-primary col-6" >Registrate</button></Link>
        </div>
        </form>
        
  </div>
  )
}
