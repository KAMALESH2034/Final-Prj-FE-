import React, { useEffect, useState } from 'react';
import { message, Skeleton } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../global';
import axios from 'axios';

export function ReadReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleData } = location.state || {};
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      console.log('fetching');
      const reviewData = await Promise.all(
        
        vehicleData.review.map(async (ID) => {
          
          const response = await axios.get(`${API}/review/get-review/${ID}`);
          console.log('Review Data:', response.data);
          return response.data;
        })
      );
      setReviews(reviewData);
    } catch (error) {
      console.error('Error fetching review data:', error);
      message.error('Failed to fetch reviews');
    }
  };

  useEffect(() => {
    if (vehicleData && vehicleData.review && vehicleData.review.length > 0) {
      getReviews();
    }
  }, [vehicleData]);

  return (
    <div className='ReadReview'>
      {reviews && reviews.length > 0 ? (
        reviews.map((item, index) => (
          <div className='review-card' key={index}>
            <div className='name'><b>User:</b> {item.user.username}</div>
            <div className='vehicle'><b>Vehicle:</b> {item.vehicle.brand}</div>
            <div className='rating'><b>Rating:</b> {item.rating} <i className="fa fa-star" aria-hidden="true"></i> </div>
            <div className='comment'><b>Comment:</b>: {item.comment}</div>
            <div className='back-button'>
              <button onClick={() => navigate('/zoomcar')}>Back</button>
            </div>
          </div>
        ))
      ) : (
        <Skeleton active />
      )}
    </div>
  );
}
