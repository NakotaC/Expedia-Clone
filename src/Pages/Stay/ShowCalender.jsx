import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Stay/CheckInCheckOut.module.css";
import { selectDateAndCity } from "../../Redux/StayReducer/action";

function ShowCalender() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const dispatch = useDispatch();

  function handleCheckInDateChange(date) {  
    setCheckInDate(date);

    dispatch(selectDateAndCity(date, checkOutDate));
  }

  function handleCheckOutDateChange(date) {
    setCheckOutDate(date);
    dispatch(selectDateAndCity(checkInDate, date));
  }

  // function showPickedDates() {
  //   console.log(`Check-in Date: ${checkInDate}`);
  //   console.log(`Check-out Date: ${checkOutDate}`);
  // }

  return (
    <div className={styles["date-pickers"]} >
      <div className={styles["date-picker-wrapper"]} style={{width:"200px",height:"100px"}}>
        <div
          className={`${styles["check-in"]} ${
            checkInDate ? styles["smaller-text"] : ""
          }`}

        
        
        >

          <label className="check-in-date">Check-in Date:</label>

          <div className={styles["date-picker-input-container"]}>
            <div className={checkInDate ? styles["smaller-text"] : ""  } >
              check in
            </div>
            <DatePicker
              selected={checkInDate}
              onChange={handleCheckInDateChange}
              dateFormat="dd/MM"
              placeholderText=" "
              className={styles["date-picker-input"]}
              calendarClassName={styles["date-picker-calendar"]}
          style={{ width:"80%", height:"60px"}}

            />
          </div>
        </div>
        <div className={styles["selected-date"]}>
          {checkInDate && (
            <div className={styles["bigger-text"]}>
              {checkInDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              })}
            </div>
          )}
        </div>
      </div>
      <div className={styles["date-picker-wrapper"]} style={{width:"200px",height:"100px"}}>
        <div
          className={`${styles["check-in"]} ${
            checkOutDate ? styles["smaller-text"] : ""
          }`}
        >
          <label className="check-out-date">Check-out Date:</label>
          <div className={styles["date-picker-input-container"]}>
            <div className={checkOutDate ? styles["smaller-text"] : ""} >
              check out
            </div>
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutDateChange}
              dateFormat="dd/MM"
              placeholderText=" "
              className={styles["date-picker-input"]}
              calendarClassName={styles["date-picker-calendar"]}
            />
          </div>
        </div>
        <div className={styles["selected-date"]}>
          {checkOutDate && (
            <div className={styles["bigger-text"]}>
              {checkOutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowCalender;
