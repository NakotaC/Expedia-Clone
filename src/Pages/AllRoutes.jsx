import { Admin } from "./Admin/AdminFlight";
import { AdminStay } from "./Admin/AdminStay";
import React from 'react'
import { Route, Routes } from "react-router-dom";
// import { HomePage } from "./HomePage";
import { AdminDashboard } from "./Admin/AdminDashboard";
import { AdminProducts } from "./Admin/AdminProducts";
import { AllHotels } from "./Admin/AllHotels";
import { Destination } from "./ThingsTodo/Destination";
import HomePage from "./HomePage";
import { Login } from "./Login";
import { Register } from "./Register";
import StayData from "./Stay/StayData";
import CheckoutPage from "./CheckoutPage";
import FlightData from "./Flights/FlightData";

export const AllRoutes = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/adminflight" element={<Admin />} />
            <Route path="/admin/adminstay" element={<AdminStay />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/admin/hotels" element={<AllHotels />} />
            <Route path="/ThingsToDo" element={<Destination/>}/>
            <Route path="/stay" element={<StayData />} />
            <Route path="/flight" element={<FlightData />} />
            
            <Route path="/checkout" element={<CheckoutPage/>} ></Route>
          </Routes>
        </>
      );
}

// add