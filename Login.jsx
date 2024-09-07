import React from "react";
import { useState } from "react";

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function Login()
{
    const navigate=useNavigate()

    const [name,setName]=useState()
    const [email,setEmail]=useState()

    const [password,setPassword]=useState()
    const handleSubmit=(e) =>
        {
        e.preventDefault()
        
        axios.post('http://localhost:4000/login',
            {email,password})
        .then(result=>console.log(result))
        alert(`login Successfully`);

        navigate("/")
        .catch(err=>console.log(err))

    }

    return( 
    <div className="d-flex justify-content-center align-items-center
        vw-100">

                <div className="bg-white p-3 rounded w-50  ">
                <h2 style={{color:"black"}}>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input required type="text"  placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" 
                        onChange={(e)=>setEmail(e.target.value)}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"  required placeholder="Enter password" autoComplete="off" name="password" className="form-control rounded-0" 
                                                onChange={(e)=>setEmail(e.target.value)}/>
                                                
                      </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Already have a Account</p>
               
                 </div>
            </div>

)};
export default Login;