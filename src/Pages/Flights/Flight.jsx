// import { Footer } from "../../components/Footer";
import { useState } from "react";
import React from "react";
import { Button,} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import "./homePage.css";
import styles from "../Stay/Stay.module.css";
// import SideBar from "./SideBar";

const initialState = {
  from: "",
  to: "",
  passenger: 1,
  departureDate: "",
  returnDate: "",
};

export default function Flights() {
  const [PassengerData, setPassengerData] = useState(initialState);
  const handleChange = (e) => {
    setPassengerData({ ...PassengerData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(PassengerData);
    setPassengerData(initialState);
  };
const swapValuehandler = () => {
    setPassengerData({
      ...PassengerData,
      from: PassengerData.to,
      to: PassengerData.from,
    });
  };

  return (
    <div>
      <div className="homeTop" style={{ marginBottom: "100px" }}>
        <div className="homeTopCard">
          <div className="secondHeader"></div>
          {/*  */}
          <div className="homeInputBx">
            <div>
              <div className="homeInputs">
                <input name="type" type="radio" id="inputs" />
                <label for="inputs">ONE WAY</label>
              </div>
              <div className="homeInputs">
                <input name="type" type="radio" id="inputs2" />
                <label for="inputs2">ROUND TRIP</label>
              </div>
              <div className="homeInputs">
                <input name="type" type="radio" id="inputs3" />
                <label for="inputs3">MULTI CITY</label>
              </div>
            </div>
            <div>
            
            </div>
          </div>
          {/*  */}
          <div className="homeMainSearchInput">
            <div className="MainSearchinputBx">
              <span>FROM</span>

              {/* from search input */}
              <select
                name="from"
                id="from"
                style={{ width: "200px" }}
                value={PassengerData.from}
                onChange={handleChange}
              >
                <option value="From">From</option>
                <option value="DELHI">DELHI</option>
                <option value="MUMBAI">MUMBAI</option>
                <option value="BANGLURU">BANGLURU</option>
                <option value="PUNE">PUNE</option>
              </select>

              <button onClick={swapValuehandler}>
                <i className="fa fa-exchange"></i>
              </button>
            </div>
            <div className="MainSearchinputBx">
              <span>TO</span>

              {/*to search input tag */}

              <select
                name="to"
                id="fromto"
                style={{ width: "200px" }}
                value={PassengerData.to}
                onChange={handleChange}
              >
                <option value="To">To</option>
                <option value="DELHI">DELHI</option>
                <option value="MUMBAI">MUMBAI</option>
                <option value="BANGLURU">BANGLURU</option>
                <option value="PUNE">PUNE</option>
              </select>
            </div>
            <div className="MainSearchinputBx">
              <span>DEPARTURE</span>
              <input type="date" />
            </div>
            <div className="MainSearchinputBx">
              <span>RETURN</span>
              <input type="date" />
            </div>
            <div className="MainSearchinputBx">
              <span>TRAVELLERS & CLASS</span>

              <input
                type="number"
                value={PassengerData.passenger}
                onChange={handleChange}
                name="passenger"
              />
            </div>
          </div>
          <div className="homeSearchButtonBx">
          <Button
            colorScheme="blue"
            size="lg"
            className={styles["SearchBtn1"]}
            style={{margin:"auto",}}
            onClick={handleClick}
            
          >
            <Link to={{ pathname: '/flight' }}>Search</Link>
          
          </Button >
            {/* <button >Search</button> */}
          </div>
        </div>
      </div>

      {/* <SideBar /> */}
      {/* <Footer /> */}
    </div>
  );
}
