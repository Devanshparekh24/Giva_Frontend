import axios from 'axios';
import BASE_URL from "../../BASE_URL";
// Action Types
export const FETCH_NAVBAR_DATA_REQUEST = 'FETCH_NAVBAR_DATA_REQUEST';
export const FETCH_NAVBAR_DATA_SUCCESS = 'FETCH_NAVBAR_DATA_SUCCESS';
export const FETCH_NAVBAR_DATA_FAILURE = 'FETCH_NAVBAR_DATA_FAILURE';

// Action Creators
export const fetchNavbarDataRequest = () => ({
  type: FETCH_NAVBAR_DATA_REQUEST,
});

export const fetchNavbarDataSuccess = (data) => ({
  type: FETCH_NAVBAR_DATA_SUCCESS,
  payload: data,
});

export const fetchNavbarDataFailure = (error) => ({
  type: FETCH_NAVBAR_DATA_FAILURE,
  payload: error,
});

// Async Action to fetch navbar data
export const fetchNavbarData = () => {
  return async (dispatch) => {
    dispatch(fetchNavbarDataRequest());
    try {
      const response = await axios.get(` ${BASE_URL}/navbar/navbarData`);
      dispatch(fetchNavbarDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchNavbarDataFailure(error.message));
    }
  };
};

// Initial State
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAVBAR_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_NAVBAR_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_NAVBAR_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
