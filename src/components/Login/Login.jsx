import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Register } from "./Register";
import { LoginForm } from "./LoginForm";
import ZooMLOGO from "../../assets/zooMLogo.png"

export function Login() {

    const navigate = useNavigate()

    return <>
        <div className="loginpage">
        
        <div className="loginnav">
            <img src={ZooMLOGO} height="29px" alt="" />

            <div className="loginnav-btn">
                    <button 
                    onClick={() => navigate("/")} 
                    > 
                    
                    LOGIN</button>

                    <button onClick={() => navigate("/register")} >REGISTER</button>
                </div>
            </div>
            <div className="news-link">
                <a href="https://www.cnbctv18.com/videos/startup/zoomcar-nasdaq-listing-spac-18712521.htm" target="_blank">
                Zoomcar goes public on Nasdaq, now trading under the ticker symbol "ZCAR". Know more.
                </a>
                
            </div>
            
            <Routes>
                
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    </>
}


