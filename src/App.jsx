import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login"
import { ZoomCar } from "./components/Vehicle/ZoomCar"
import { Booking } from "./components/booking/Booking"
import { Payment } from './components/Payment/Payments'

import { Review } from "./components/Reviews/Review";

function App() {
  return (
    <div className="container">
      <div className="zoomCar">
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/zoomcar/*" element={<ZoomCar />} />
          <Route path="/booking/*" element={<Booking />} />
          <Route path="/payment/*" element={<Payment />} />
          <Route path="/review/*" element={<Review />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
