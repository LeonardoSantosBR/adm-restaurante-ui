import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/auth/signin";
import Signup from "../pages/auth/signup";
import Orders from "../pages/orders/orders";

function RoutesOfApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesOfApplication;
