import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Register } from "./Register";
import { LoginForm } from "./LoginForm";

export function Login() {

    const navigate = useNavigate()

    return <>
        <div className="loginpage">
            <div className="loginnav">
                <button 
                onClick={() => navigate("/")} 
                > 
                LOGIN</button>

                <button onClick={() => navigate("/register")} >REGISTER</button>
            </div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    </>
}


