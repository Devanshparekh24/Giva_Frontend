import axios from 'axios';
import { BASE_URL } from "../../../BASE_URL";
import { NAVBAR_ACTIONS } from './actionTypes';

// Action Creators
export const fetchNavbarDataRequest = () => ({
  type: NAVBAR_ACTIONS.FETCH_NAVBAR_DATA_REQUEST,
});

export const fetchNavbarDataSuccess = (data) => ({
  type: NAVBAR_ACTIONS.FETCH_NAVBAR_DATA_SUCCESS,
  payload: data,
});

export const fetchNavbarDataFailure = (error) => ({
  type: NAVBAR_ACTIONS.FETCH_NAVBAR_DATA_FAILURE,
  payload: error,
});

// Async Action to fetch navbar data
export const fetchNavbarData = () => {
  return async (dispatch) => {
    dispatch(fetchNavbarDataRequest());
    try {
      const response = await axios.get(`${BASE_URL}/navbar/navbarData`);
      dispatch(fetchNavbarDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchNavbarDataFailure(error.message));
    }
  };
};
