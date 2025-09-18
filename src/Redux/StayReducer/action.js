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
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, limit, startAfter } from "firebase/firestore";
import firebase_app from "../../01_firebase/config_firebase";

const db = getFirestore(firebase_app);

export const getHotelSuccess = (payload) => ({ type: GET_HOTEL_SUCCESS, payload });
export const postHotelSuccess = (payload) => ({ type: POST_HOTEL_SUCCESS });
export const hotelRequest = () => ({ type: HOTEL_REQUEST });
export const hotelFailure = () => ({ type: HOTEL_FAILURE });
export const fetch_hotel = (payload) => ({ type: NEW_GET_HOTELS_SUCCESS, payload });
export const handleDeleteHotel = (payload) => ({ type: DELETE_HOTEL, payload });

export const selectDateAndCity = (checkInDate, checkOutDate) => ({
  type: SELECTED_DATE_AND_CITY,
  payload: { checkInDate, checkOutDate },
});
export const selectCity = (selectedCity) => ({
  type: SELECTED_CITY,
  payload: { selectedCity },
});

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

// Fetch hotels from Firestore with sorting, ordering, and pagination
export const fetchingHotels = (sort = "price", order = "asc", page = 1) => async (dispatch) => {
  dispatch({ type: HOTEL_REQUEST });
  try {
    let q = query(
      collection(db, "hotel"),
      // orderBy(sort, order),
      limit(20)
    );
    // For pagination, you would need to use startAfter with a document snapshot.
    // This simple version just fetches the first 20 sorted hotels.
    const querySnapshot = await getDocs(q);
    const hotels = [];
    querySnapshot.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: GET_HOTEL_SUCCESS, payload: hotels });
  } catch (err) {
    dispatch({ type: HOTEL_FAILURE });
    console.log(err);
  }
};

// Delete a hotel from Firestore
export const DeleteHotel = (deleteId) => async (dispatch) => {
  try {
    console.log("Deleting hotel with ID:", deleteId, typeof deleteId);
    await deleteDoc(doc(db, "hotel", deleteId));
    dispatch(handleDeleteHotel(deleteId));
  } catch (e) {
    console.log(e);
  }
};
