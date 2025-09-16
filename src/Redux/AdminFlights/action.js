import firebase_app from "../../01_firebase/config_firebase";
import { deleteDoc, doc } from "firebase/firestore";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {
GET_FLIGHT_SUCCESS,
  POST_FLIGHT_SUCCESS,
  FLIGHT_REQUEST,
  FLIGHT_FAILURE,
  FETCH_FLIGHTS,
  DELETE_FLIGHTS,
} from "./actionType";

const db = getFirestore(firebase_app);


export const getFlightSuccess = (payload) => {
  return { type: GET_FLIGHT_SUCCESS, payload };
};

export const postFlightSuccess = (payload) => {
  return { type: POST_FLIGHT_SUCCESS };
};

export const flightRequest = () => {
  return { type: FLIGHT_REQUEST };
};

export const flightFailure = () => {
  return { type: FLIGHT_FAILURE };
};

//
export const fetch_flights_product = (payload) => {
  return { type: FETCH_FLIGHTS, payload };
};
//
export const handleDeleteProduct = (payload) => {
  return { type: DELETE_FLIGHTS, payload };
};

export const addFlight = (payload) => async (dispatch) => {
  dispatch(flightRequest());
  try {
    await addDoc(collection(db, "flight"), payload);
    dispatch(postFlightSuccess());
  } catch (err) {
    dispatch(flightFailure());
  }
};

//
export const fetchFlightProducts = (limit) => async (dispatch) => {
  dispatch(flightRequest());
  try {
    const querySnapshot = await getDocs(collection(db, "flight"));
    let flights = [];
    querySnapshot.forEach((doc, idx) => {
      if (idx < limit) flights.push({ id: doc.id, ...doc.data() });
    });
    dispatch(fetch_flights_product(flights));
  } catch (err) {
    dispatch(flightFailure());
  }
};

export const DeleteFlightProducts = (deleteId) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "flight", deleteId));
    dispatch(handleDeleteProduct(deleteId));
  } catch (e) {
    console.log(e);
  }
};
