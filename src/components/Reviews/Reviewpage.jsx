import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    Button,
    Form,
    Input,
    Radio,
    message,
} from 'antd';
import axios from 'axios';
import { API } from '../../global';
const { TextArea } = Input;

export function Reviewpage() {

    const navigate = useNavigate()
    const location = useLocation()
    const { vehicledata, userdata } = location.state || {}
    const formlayout = {
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
    }

    const handlesubmit = async (value) => {
        const user = userdata._id
        const vehicle = vehicledata._id
        const reviewdata = {
            user,
            vehicle,
            ...value
        }

        try {
            await axios.post(`${API}/review/add-review`, reviewdata)
            message.success("Review sumbitted")
            navigate("/zoomcar")
        }
        catch (error) {
            message.error("You have alreday submitted")
            navigate("/zoomcar")
        }
    }

    return (
        <>
        <div className='review-heading p-3'>
                <button 
                className='btn btn-dark px-4 reviewbtn' 
                onClick={() => navigate(-1)}
                >
                ◁   Back</button>
            </div>
        <div className="review-content">
            
            <div className="review-vehicle">
                
                <Form {...formlayout}
                    className="review-form"
                    onFinish={handlesubmit}
                    variant="filled"
                >
                    <div className="vehicle-name">
                        {vehicledata.brand}
                    </div>
                    <div className="vehicle-review">
                        <Form.Item label="Rating" name="rating"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please review',
                                },
                            ]} >
                            <Radio.Group>
                                <Radio value="1">1</Radio>
                                <Radio value="2">2</Radio>
                                <Radio value="3">3</Radio>
                                <Radio value="4">4</Radio>
                                <Radio value="5">5</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className="vehicle-comment">
                        <Form.Item label="FeedBack" name="comment"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please review',
                                },
                            ]}>
                            <TextArea rows={4} />
                        </Form.Item>
                    </div>
                    <div className="button">
                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button className='button-submit-review' type='primary' htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
        </>
        
    )
}


