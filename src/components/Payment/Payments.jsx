import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../../global';
import { useLocation } from 'react-router-dom';

import iconSvg from "../../assets/zooMLogo.png"

export function Payment() {

    const navigate = useNavigate()
    const [currency, setCurrency] = useState('INR');

    const location = useLocation()
    const { vehicle, userdetails, amount, booking } = location.state || {}

    const handlepayment = async (e) => {

        const user = userdetails._id
        const paymentdetails = {
            user,
            booking,
            currency,
            amount,
        }
        alert("Payment Successfully")
        navigate("/review", { state: { userdata: userdetails, vehicledata: vehicle } })

      /*  try {
            const response = await axios.post(`${API}/payment/add-payment`, paymentdetails);
            const Order = await response.data

            const options = {
                key: import.meta.env.VITE_KEY,
                amount,
                currency,
                order_id: Order.id,
                "handler": function (response) {
                    alert(response.razorpay_payment_id);
                    navigate("/review", { state: { userdata: userdetails, vehicledata: vehicle } })
                },
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
                navigate("/review", { state: { user: userdetails, vehicle: vehicle } })
            });
            rzp1.open();
            e.preventDefault();

        } catch (error) {
            console.error('Error creating Razorpay order:', error.message);
        }**/

    }

    return <>
        <div className="Paymentpage">
            <div className="payment-nav">
                <button onClick={() => navigate("/booking/read-booking")} ><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
                <img src={iconSvg} alt="" />
                <p>MAKE YOU PAYMENT</p>
            </div>
            <div className="paymentHeading">
                    <p>Confirm Your Payment</p>
                </div>
            <div className='payment-content' >
                
                <div className="payment-card">
                    <form className='payment-form' >
                        <div className="heading">
                            <p>PAYMENT DETAILS:</p>
                        </div>
                       <div className="pay-card-details">
                       <div className="paymentname">
                            <label name="user"><b>Name:</b> {userdetails.username}</label>
                        </div>
                        <div className="paymentbrand">
                            <label name="vehicle"><b>Vehicle:</b> {vehicle.brand}</label>
                        </div>
                        <div className="paymentamount">
                            <label name="amount" ><b>Amount:</b> {amount}</label>
                        </div>
                        <div className="paymentcurrency">
                            <label name="currency" >
                                <b>Currency:</b>
                                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                </select>
                            </label>
                        </div>
                       </div>
                        <div className="paymentButton">
                            <button type="button" onClick={() => handlepayment()} >
                                Pay with Razorpay
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </>
}