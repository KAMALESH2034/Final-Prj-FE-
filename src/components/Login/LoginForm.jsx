import React from "react";
import { Button, Form, Input, message, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { API } from "../../global.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                <Col lg={24} xs={24}>
                    <div className="LoginFormpage">
                        <div className="loginheading">
                            <p>ZOOM CAR </p>
                            
                        </div>
                        <div className="loginSubheading">
                        <p>Enter details to login/sign-up</p>
                        </div>
                        
                        <div className="loginform">
                            <Form onFinish={onFinish} name="normal_login"
                                className="login-form"
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
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>

                                <Form.Item name="password" className="loginPassword"
                                    rules={[{ required: true, message: "Please enter the valid Password" }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="" onClick={() => navigate("/register")} className="registernow" >register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="loginDescription">
                            <span>
                                Zoomcar's website offers a seamless self-drive car rental experience across various Indian cities. Users can easily book cars by selecting their city, rental duration, and preferred car type, with options ranging from hatchbacks to SUVs and luxury vehicles. Flexible rental plans include hourly, daily, weekly, and monthly options to suit individual needs and budgets. Convenient features such as account management, pickup and drop-off location selection, and multiple payment methods enhance the user experience. The website provides comprehensive vehicle information, user reviews, and detailed rental policies. It also highlights current promotional offers and discounts. For customer support, FAQs, chat assistance, and a helpline are available. Zoomcar prioritizes safety and hygiene measures to ensure a secure rental experience.
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

