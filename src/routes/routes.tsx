import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin/signin";

function RoutesOfApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin"/>}/>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesOfApplication;
