import React from 'react'
import { Route, Routes} from "react-router-dom"
import { ReadReview } from './ReadReview';
import { Reviewpage } from './Reviewpage';

export function Review() {

    return (
        <div className="reviewgpage">
            <div className="review-nav">
                <p>Reviews us with your expreience </p>
            </div>
            <Routes>
                <Route path="/" element={<Reviewpage />} />
                
                <Route path="/read-review" element={<ReadReview />} />
            </Routes>
        </div>
    )
}





