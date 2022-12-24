import axios from "axios";
import {
  FETCH_ALL_USER,
  FETCH_ALL_USER_ERROR,
  FETCH_ALL_USER_SUCCESS,
  FETCH_USER_BY_ID,
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_SUCCESS,
} from "./usersType";

// Call to get Users/Authors from API specified by user ID
export const fetchUsersById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_BY_ID });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );

    dispatch({
      type: FETCH_USER_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_BY_ID_ERROR,
      payload: error.message,
    });
  }
};

// Call to get all Users/Authors from API
export const fetchAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_USER });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );

    dispatch({
      type: FETCH_ALL_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_USER_ERROR,
      payload: error.message,
    });
  }
};
