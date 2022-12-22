import {
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_RESET
  } from "./commentsType";


const initialState = {
    allComments: [],
    success: false,
    loading: false,
    error: null,
  };


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMMENTS:
        return { ...state, loading: true, success: false };
  
      case FETCH_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          allComments: action.payload,
        };
      case FETCH_COMMENTS_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_COMMENTS_RESET:
        return { allComments: [], loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  