import React, { useState } from "react";
import { Button, Form, Input, message, Row, Col, Select } from "antd";
import axios from "axios";
import { API } from "../../global.jsx";
import { useNavigate } from "react-router-dom";
import download from "../../assets/download.png"

const { Option } = Select;

export function Register() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true)
        try {
            await axios.post(`${API}/user/register`, values);
            message.success("Registered Successfully");
            navigate("/");
        } catch (error) {
            message.error("Something went wrong");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Row>
                <Col lg={50} xs={24}>
                    <div className="RegisterFormpage">
                        <div className="Registerheading">
                            <p>WELCOME TO ZOOM CAR </p>
                        </div>
                        <div className="registerform">
                            <Form onFinish={onFinish}>
                                <Form.Item
                                    
                                    name="username"
                                    className="registerUsername"
                                    rules={[
                                        { required: true, message: "Please enter a Username" }
                                    ]}
                                >
                                    <Input placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    
                                    name="email"
                                    className="registerEmail"
                                    rules={[
                                        { required: true, message: "Please enter a Email" },
                                        { type: "email", message: "Please enter a valid Email" },
                                    ]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>

                                <Form.Item
                                   
                                    name="password"
                                    className="registerPassword"
                                    rules={[
                                        { required: true, message: "Please select your role a Password" },
                                    ]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>

                                <Form.Item
                                    label="Role:"
                                    name="role"
                                    className="registerRole"
                                    rules={[{ required: true, message: 'Please select your role' }]}
                                >
                                    <Select >
                                        <Option value="user">User</Option>
                                        <Option value="admin">Admin</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="register-button"
                                        loading={loading}
                                    >
                                        Register
                                    </Button>
                                </Form.Item>

                            </Form>
                        </div>
                        <div className="Description px-4 py-5">
                            <span>
                                At Zoomcar, we prioritize the security and privacy of your personal information. We use advanced encryption and security protocols to protect your data during transmission and storage. Our stringent access controls ensure that only authorized personnel have access to your information.

                                We adhere to strict data protection standards and comply with all relevant regulations to safeguard your data. Your trust is important to us, and we are committed to maintaining the confidentiality and integrity of your information.
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
                    </div>
                </Col>
            </Row>
        </>
    );
}
