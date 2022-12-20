import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Login = () => {

    const [errpr, setError] = useState("")
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

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
  return (
    <div className='container pt-5' style={{height:40+"em"}}>  
        <form className="row g-3">
        <div className="col-auto">
            <label className="form-label">Email address</label>
            <input type="email" value={userName} onChange={(e) => setUserName(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="col-auto">
            <label className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        
        <button type="submit" onClick={loginHandler} className="btn btn-primary mb-3">Ingresar</button>
        </form>
  </div>
  )
}
