import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const SignIn = () => {

    const [errpr, setError] = useState("")
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    //Envia el formulario para ser registrado, el servidor responde con un objeto mostrando los datos

    const SignHandler = ({token, setToken}) =>{
        axios( {
            url:"https://fakestoreapi.com/users",
            method:"POST",
            email:"mail",
                    username:userName,
                    password:password,
                    name:{
                        firstname:"nombre",
                        lastname:"apellido"
                    },
                    address:{
                        city:"ciudad",
                        street:"calle",
                        number:"numero",
                        zipcode:"postal",
                        geolocation:{
                            lat:null,
                            long:null
                        }
                    },
                    phone:"telefono",
        }).then(res=> {
            console.log(res.data.token);
            //setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
        }).catch(err=>{
            console.log(err.response);
            setError(err.response);
        })
    }

//Formulario de registro de usuario
  return (
    <div className='container' style={{height:40+"em", paddingLeft:10+"em", paddingTop:5+"em"}}>  
        <h1>Registrarse</h1>
        <form className="row g-3">
        <div className="col-auto">
            <label className="form-label">Usuario</label>
            <input type="email" value={userName} onChange={(e) => setUserName(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="Usuario"/>
            <button type="submit" onClick={SignHandler} className="btn btn-primary col-6">Registrar</button>
        </div>
        <div className="col-auto">
            <label className="form-label">Contrase??a</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
            <Link to="/"><button type="submit" className="btn btn-primary col-6">Volver</button></Link>
        </div>
        </form>
        
  </div>
  )
}