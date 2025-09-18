import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../../01_firebase/config_firebase";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFlightProducts } from "../../Redux/AdminFlights/action";
import "./AdminDashboard.Module.css";


export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [flight, setFlight] = useState(0);
  const [hotel, setHotel] = useState(0);
  const [users, setUsers] = useState(0);
  const [giftCard, setGiftCard] = useState(0);
  const [things, setThings] = useState(0);
 const [loading, setLoading] = useState(false);

  const db = getFirestore(firebase_app);

  const getStats = async () => {
    setLoading(true);
    try {
      const flightSnap = await getDocs(collection(db, "flight"));
      setFlight(flightSnap.size);

      const hotelSnap = await getDocs(collection(db, "hotel"));
      setHotel(hotelSnap.size);

      const usersSnap = await getDocs(collection(db, "users"));
      setUsers(usersSnap.size);

      const giftCardSnap = await getDocs(collection(db, "giftcards"));
      setGiftCard(giftCardSnap.size);

      const thingsSnap = await getDocs(collection(db, "Things_todo"));
      setThings(thingsSnap.size);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <div className="mainAdminLandingpage">
        <div className="adminSideBr">
          <h1><Link to={"/admin"}>Home</Link></h1>
          <h1><Link to={"/admin/adminflight"}>Add Flight</Link></h1>
          <h1><Link to={"/admin/adminstay"}>Add Stays</Link></h1>
          <h1><Link to={"/admin/products"}>All Flights</Link></h1>
          <h1><Link to={"/admin/hotels"}>All Hotels</Link></h1>
          <h1><Link to={"/"}>Log out</Link></h1>
        </div>
        <div className="mainBox">
          <div className="mainBoxHead">
            <h1>Admin Dashboard</h1>
            <hr />
            <hr />
            <hr />
          </div>
          <div className="DataBoxes">
            {/*  */}
            <div className="dataBx">
              <h1>Total Hotel</h1>
              {<h1>{hotel}</h1>}
              <Link to="/admin/hotels">View</Link>
            </div>
            <div className="dataBx">
              <h1>Total Flights</h1>
              {<h1>{flight}</h1>}
              <Link to="/admin/flights">View</Link>
            </div>
            <div className="dataBx">
              <h1>Total Users</h1>
              {<h1>{users}</h1>}
              <Link to="/admin">View</Link>
            </div>
            <div className="dataBx">
              <h1>Giftcards</h1>
              {<h1>{giftCard}</h1>}
              <Link to="/admin/giftcards">View</Link>
            </div>
            <div className="dataBx">
              <h1>Pakages Available</h1>
              {<h1>{things}</h1>}
              <Link to="/setThings">View</Link>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
