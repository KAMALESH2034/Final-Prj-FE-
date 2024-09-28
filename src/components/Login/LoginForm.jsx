import React from "react";
import { Button, Form, Input, message, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { API } from "../../global.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import download from "../../assets/download.png"

export function LoginForm() {

    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const res = await axios.post(`${API}/user/login`, values)
            message.success("Login Sucessfully")
            navigate("/zoomcar")
            localStorage.setItem("user_data", JSON.stringify(res.data.user))
            localStorage.setItem("token", res.data.token)
        }
        catch (error) {
            message.error("Invalid Credential")
        }
    }

    return (
        <>
            <Row>
                <Col lg={24} xs={24} className="login-form-container">
                    <div className="LoginFormpage">
                        
                    
                        
                        <div className="loginform">
                            <div className="loginheading">
                                <h1>Self-Drive Car Rentals in Chennai</h1>
                                <h3> Book your drive now! </h3>
                                
                            </div>
                            <div className="loginSubheading">
                                <p>Enter details to login/sign-up</p>
                            </div>
                            <Form onFinish={onFinish} name="normal_login"
                                className="login-form col-md-3 col-sm-10 col-xs-10"
                                initialValues={{
                                    remember: true,
                                }}  >
                                <Form.Item 
                                name="email" 
                                className="loginEmail"
                                    rules={[{ 
                                        required: true, 
                                        message: "Please enter the EmailID" 
                                    }]}
                                >
                                    <Input className="login-inp" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>

                                <Form.Item name="password" className="loginPassword"
                                    rules={[{ required: true, message: "Please enter the valid Password" }]}
                                >
                                    <Input
                                    className="login-inp"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item className="loginButton">
                                    <Button type="primary"
                                     htmlType="submit" 
                                     className="login-form-button">
                                        Log in
                                    </Button><br/>
                                    <span className="or">or.</span> &nbsp;
                                    <a href="" onClick={() => navigate("/register")} className="registernow" >register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                        
                    </div>
                </Col>
            </Row>
            <div className="Description px-4 py-5">
                            <span>
                            Zoomcar is the leading marketplace for car sharing in emerging markets,with over 20,000 cars on its technology-driven platform 
                            across India, Indonesia, and Egypt. Zoomcar empowers host entrepreneurs to safely and easily share their cars to earn additional 
                            passive income. Guests in the Zoomcar community enjoy a diverse, affordable selection of cars to unlock memorable driving experiences
                             with friends and family. Founded in 2013 and headquartered in Bengaluru, India, Zoomcar employs over 250 people and operates in over 
                             45 cities across India, Indonesia, and Egypt. Uri Levine, the co-founder of mobility unicorns Waze and Moovit, currently serves as 
                             Zoomcar's Chairman of the Board.
                                </span>
                        </div>
                        <div className="Description2">
                           <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                NEVER STOP <br/>LIVING
                            </div>
                            <div className="col-md-6 d-flex pt-4 justify-content-center align-items-center">
                                    <p>
                                        <img src={download} height="60px" width="60px" className="mx-3" alt="" />
                                    DOWNLOAD ZOOMCAR APP<br/>
                                    We have incredible offers, discounts & much more in our app.
                                    </p>
                            </div>

                           </div>
                        </div>
       
        </>
    );
}

