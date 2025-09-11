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

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  checkInDate: null,
  checkOutDate:null,
  selectedCity: null,
};

export const StayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECTED_DATE_AND_CITY:
      return { ...state, checkInDate: payload.checkInDate,checkOutDate:payload.checkOutDate, selectedCity: payload.selectedCity };
      case SELECTED_CITY:
        return { ...state, selectedCity: payload.selectedCity };
      case HOTEL_REQUEST:
      return { ...state, isLoading: true };

    case HOTEL_FAILURE:
      return { ...state, isError: true };

    case GET_HOTEL_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case POST_HOTEL_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case NEW_GET_HOTELS_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        data: (state.data = payload),
      };

    case DELETE_HOTEL: {
      const filterHotel = state.data.filter((ele) => ele.id !== payload);
      return { ...state, data: filterHotel };
    }

    default:
      return state;
  }
};
