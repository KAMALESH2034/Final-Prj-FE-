import { message, Skeleton } from 'antd'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../global'
import { deleteBook, setCartItems } from '../../redux/slice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function ReadBooking() {

  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  const getBooking = async () => {
    try {
      const response = await axios.get(`${API}/booking/get-booking`, {
        headers: {
          Authorization: token
        }
      });
      dispatch(setCartItems(response.data));
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);


  const cartItem = useSelector((state) => state.Car.cartItem) || [];

  const navigate = useNavigate();

  if (cartItem.length === 0) {
    navigate('/zoomcar')
  }


  const haldleEdit = async (book) => {
    if (book.length !== 0) {
      navigate("/booking/edit-booking", { state: { bookings: book } })
    }
    else {
      navigate("/zoomcar")
    }
  }

  const haldleDelete = async (ID) => {
    try {
      await axios.delete(`${API}/booking/delete-booking/${ID}`)
      message.success("Deleted Sucessfully")
      dispatch(deleteBook(ID))
    }
    catch (error) {
      console.log("Falied to delete")
    }
  }

  const handlepay = async (book) => {
    navigate("/payment", { state: { userdetails: book.user, booking: book._id, amount: book.totalPrice, vehicle: book.vehicle } })
  }


  const handelstarDate = (start) => {
    const date = new Date(start)
    const exractdate = date.toISOString().split("T")[0]
    return exractdate
  }

  const handelendDate = (end) => {
    const date = new Date(end)
    const exractdate = date.toISOString().split("T")[0]

    return exractdate
  }


  return <>
    <div className='readBooking' >
      <div className="readBookingTitle">
      <p>Confirm Your Bookings and ready to go !</p>

      </div>
      <div className="readBookingCard">
        <div className="item">
          {
            cartItem.length > 0 ? (cartItem.map((res) => (
              <div className="bookingCard" key={res._id} >
                <div className="bookedName"><b>{res.user?.username ?? 'Please Clik Pay to finish your Booking'}</b></div>
                <div className="bookedBrand"><b>{res.vehicle?.brand ?? 'Please Clik Pay to finish your Booking'}</b></div>
                <div className="bookedDates">
                  <div className="startDate"><b>Start Date:</b> {handelstarDate(res.startDate)}</div>
                  <div className="endDate"><b>End Date:</b> {handelendDate(res.endDate)}</div>
                </div>
                <div className="booketotalRent"><b>Rent - </b><b>{res.totalPrice ?? 'Please Clik Pay to finish your Booking'}</b></div>
                <div className="bookedPay">
                  <button onClick={() => handlepay(res)} >PAY</button>
                </div>
                <div className="edit-delete">
                  <div className="bookEdit"><i className="fa fa-pencil-square" aria-hidden="true" onClick={() => haldleEdit(res)} ></i></div>
                  <div className="bookDelete"><i className="fa fa-trash" aria-hidden="true" onClick={() => haldleDelete(res._id)} ></i></div>
                </div>
              </div>
            ))
            ) : <Skeleton active />
          }
        </div>
      </div>
    </div>
  </>

}
