import axios from "axios";
import {
  SELECTED_DATE_AND_CITY,
  SELECTED_CITY,
  HOTEL_FAILURE,
  HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  POST_HOTEL_SUCCESS,
  NEW_GET_HOTELS_SUCCESS,
  DELETE_HOTEL,
} from "./actionType";

export const getHotelSuccess = (payload) => {
  return { type: GET_HOTEL_SUCCESS, payload };
};

export const postHotelSuccess = (payload) => {
  return { type: POST_HOTEL_SUCCESS };
};

export const hotelRequest = () => {
  return { type: HOTEL_REQUEST };
};

export const hotelFailure = () => {
  return { type: HOTEL_FAILURE };
};

export const fetch_hotel = (payload) => {
  return { type: NEW_GET_HOTELS_SUCCESS, payload };
};

//
export const handleDeleteHotel = (payload) => {
  return { type: DELETE_HOTEL, payload };
};

//Pick date and city for storing into redux store

export const selectDateAndCity = (checkInDate,checkOutDate) => {
  return { type: SELECTED_DATE_AND_CITY, payload: { checkInDate, checkOutDate } };
};
export const selectCity = (selectedCity) => {
  return { type: SELECTED_CITY, payload: { selectedCity } };
};

export const addHotel = (payload) => (dispatch) => {
  dispatch(hotelRequest());

  axios
    .post("https://happy-sunglasses-eel.cyclic.app/hotel", payload) 
    .then(() => {
      dispatch(postHotelSuccess());
    })
    .catch((err) => {
      dispatch(hotelFailure());
    });
};

//https://happy-sunglasses-eel.cyclic.app/hotel?_sort=asc&_order=price&page=1&_limit=20
export const fetchingHotels = (sort, order, page) => async (dispatch) => {
  console.log(order, sort,page);
  dispatch({ type: HOTEL_REQUEST });
  try {
    const res = await axios.get(
      `https://happy-sunglasses-eel.cyclic.app/hotel?_sort=${sort}&_order=${order}&_page=${page}&_limit=20`
    );
    console.log(res.data);
    dispatch({ type: GET_HOTEL_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: HOTEL_FAILURE });
    console.log(err);
  }
};





//

export const DeleteHotel = (deleteId) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://happy-sunglasses-eel.cyclic.app/hotel/${deleteId}`, 
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    console.log(data);
    dispatch(handleDeleteHotel(deleteId));
  } catch (e) {
    console.log(e);
  }
};
