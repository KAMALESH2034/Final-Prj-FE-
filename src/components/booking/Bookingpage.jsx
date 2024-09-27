import React from 'react';
import {
    Button,
    Form,
    message,
} from 'antd';
import axios from 'axios';
import { API } from '../../global';
import { useLocation, useNavigate } from 'react-router-dom';

export function Bookingpage() {

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    };

    const getuser = JSON.parse(localStorage.getItem("user_data"));
    const user = getuser?._id
    const location = useLocation()
    const { vehicle, price, brand } = location.state || {}
    const username = getuser?.username
    const navigate = useNavigate()

    function differncebetweendates(sDate, eDate) {
        const start = new Date(sDate);
        const end = new Date(eDate);
        const milliSeconds = end - start;
        const Difference = milliSeconds / (1000 * 60 * 60 * 24);
        if (Difference == 0) {
            return 1
        }
        else {
            return Math.ceil(Difference);
        }
    }

    const handlesubmit = async (values) => {
        const { startDate, endDate } = values
        if (!startDate || !endDate) {
            message.error("Please select both the dates befor submit")
            return;
        }

        const totalPrice = differncebetweendates(startDate, endDate) * price;
        const bookingDetails = {
            user,
            vehicle,
            startDate,
            endDate,
            totalPrice
        }

        try {
            await axios.post(`${API}/booking/add-booking`, bookingDetails)
            message.success("booking sumbitted")
            navigate("/booking/read-booking")
        }
        catch (error) {
            message.error("You have alreday submitted")
            navigate("/booking/read-booking")
        }
    }


    const present = new Date().toISOString().split('T')[0];

    return <>
        <div className="booking-content">
            <div className="select-booking">
                <Form
                    {...formItemLayout}
                    onFinish={handlesubmit}
                    initialValues={{ startDate: "", endDate: "" }}
                    variant="filled"
                    className="booking-form"
                >
                    <div className="user-name">
                        <p>Hi {username} you have picked {brand} Car,
                            Please select the date to Book</p>
                    </div>
                    <div className="star-end-date">
                        <Form.Item
                            label="Start Date"
                            name="startDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <input type="date" required min={present} className='input-date' />
                        </Form.Item>

                        <Form.Item
                            label="End Date"
                            name="endDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <input type="date" required min={present} className='input-date' />
                        </Form.Item>
                    </div>
                    <div className="button">
                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button className='button-submit' type='primary' htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    </>
}
