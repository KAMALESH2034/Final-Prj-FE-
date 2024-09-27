
import axios from 'axios'
import React from 'react'
import { API } from '../../global'
import {
    Button,
    DatePicker,
    Form,
    message,
} from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { editBook } from '../../redux/slice';

export function EditBooking() {

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

    const location = useLocation()
    const { bookings } = location.state

    const dispatch = useDispatch();

    const navigate = useNavigate();

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

    const price = bookings.vehicle?.pricePerDay

    const handlesave = async (value) => {

        const { startDate, endDate } = value
        if (!startDate || !endDate) {
            message.error("Please select both the dates befor submit")
            return;
        }

        const totalPrice = differncebetweendates(startDate, endDate) * price;
        const updatedDetails = {
            ...value,
            startDate,
            endDate,
            totalPrice
        }

        try {
            const Book = await axios.put(`${API}/booking/edit-booking/${bookings._id}`, updatedDetails);
            message.success('Booking updated successfully!');
            dispatch(editBook(Book.data))
            navigate("/booking/read-booking")
        } catch (error) {
            message.error('Failed to update booking.');
        }
    }

    const present = new Date().toISOString().split('T')[0];

    return (
        <div className='editBooking-content'>
            <div className="editBookin-card">
                <Form
                    {...formItemLayout}
                    onFinish={handlesave}
                    initialValues={{ startDate:bookings?.startDate?.split('T')[0],
                         endDate: bookings?.endDate?.split('T')[0] }}
                    variant="filled"
                    className="booking-form"
                >
                    <div className="user-name">
                        <p>Hi {bookings.user?.username ?? 'Please Clik Pay to finish your Booking'} you have picked {bookings.vehicle?.brand ?? 'Please Clik Pay to finish your Booking'} Car,
                            Please select the date to Book</p>
                    </div>
                    <div className="star-end-date">
                        <Form.Item
                            label="Start Date"
                            name="startDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please make a change',
                                },
                            ]}
                        >
                            <input type="date"  
                                min={present} required className='input-date' />
                        </Form.Item>

                        <Form.Item
                            label="End Date"
                            name="endDate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please make a change',
                                },
                            ]}
                        >
                            <input type="date" 
                                min={present} required className='input-date' />
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
                                Save
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}


