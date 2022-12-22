import {
  FETCH_USER_BY_ID,
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_RESET
  } from "./usersType";


const initialState = {
    userInfo: [],
    success: false,
    loading: false,
    error: null,
  };


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_BY_ID:
        return { ...state, loading: true, success: false };
  
      case FETCH_USER_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userInfo: action.payload,
        };
      case FETCH_USER_BY_ID_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_USER_BY_ID_RESET:
        return { userInfo: [], loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  