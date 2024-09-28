import React from 'react'
import { Route, Routes} from "react-router-dom"
import { ReadReview } from './ReadReview';
import { Reviewpage } from './Reviewpage';
import zoomlogo from "../../assets/zooMLogo.png"
import { useNavigate } from 'react-router-dom';

export function Review() {
    const navigate = useNavigate()
    return (
        <div className="reviewgpage">
            <div className="review-nav">
                
                <img src={zoomlogo} alt="" />
                <p className='review-head'>Reviews us with your expreience </p>
                <p>❔Help</p>
            </div>
            
            <Routes>
                <Route path="/" element={<Reviewpage />} />
                
                <Route path="/read-review" element={<ReadReview />} />
            </Routes>
        </div>
    )
}





