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
    <div className='container'>
        <div className='review-heading p-3'>
          <button 
          className='btn btn-dark px-4 reviewbtn' 
          onClick={() => navigate('/zoomcar')}
          >
          ◁   Back</button>
        </div>
    <div className='ReadReview'>
      
     

      <div className='table-container'>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">User</th>
            <th scope="col">Rating [5]</th>
            <th scope="col">Comment</th>           
          </tr>
        </thead>
        <tbody>
          {reviews.map((item, index) => (
            <tr className='singleRow' key={index}>
              <td>{index + 1}</td>
              <td>{item.user.username}</td>
              <td>
                {
                  Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true"></i>
                    ))
                }
                </td>
              <td>{item.comment}</td>
              
            </tr>
            
            
          ))}
         
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}
