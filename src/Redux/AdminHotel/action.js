import {
  HOTEL_FAILURE,
  HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  POST_HOTEL_SUCCESS,
  NEW_GET_HOTELS_SUCCESS,
  DELETE_HOTEL,
} from "./actionType";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, limit as fsLimit } from "firebase/firestore";
import firebase_app from "../../01_firebase/config_firebase";

const db = getFirestore(firebase_app);

export const getHotelSuccess = (payload) => ({ type: GET_HOTEL_SUCCESS, payload });
export const postHotelSuccess = (payload) => ({ type: POST_HOTEL_SUCCESS });
export const hotelRequest = () => ({ type: HOTEL_REQUEST });
export const hotelFailure = () => ({ type: HOTEL_FAILURE });
export const fetch_hotel = (payload) => ({ type: NEW_GET_HOTELS_SUCCESS, payload });
export const handleDeleteHotel = (payload) => ({ type: DELETE_HOTEL, payload });

// Add a hotel to Firestore
export const addHotel = (payload) => async (dispatch) => {
  dispatch(hotelRequest());
  try {
    await addDoc(collection(db, "hotel"), payload);
    dispatch(postHotelSuccess());
  } catch (err) {
    dispatch(hotelFailure());
  }
};


export const fetchingHotels = (limit) => async (dispatch) => {
  dispatch(hotelRequest());
  try {
    const querySnapshot = await getDocs(collection(db, "hotel"));
    const hotels = [];
    querySnapshot.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });
    dispatch(fetch_hotel(hotels));
  } catch (err) {
    dispatch(hotelFailure());
    console.log(err);
  }
};

// Delete a hotel from Firestore
export const DeleteHotel = (deleteId) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "hotel", String(deleteId)));
    dispatch(handleDeleteHotel(deleteId));
  } catch (e) {
    console.log(e);
  }
};
