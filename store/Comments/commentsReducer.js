import {
  FETCH_COMMENT_BY_ID,
  FETCH_COMMENT_BY_ID_ERROR,
  FETCH_COMMENT_BY_ID_SUCCESS,
  FETCH_COMMENT_BY_ID_RESET
  } from "./commentsType";


const initialState = {
    allComments: [],
    success: false,
    loading: false,
    error: null,
  };


const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMMENT_BY_ID:
        return { ...state, loading: true, success: false };
  
      case FETCH_COMMENT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          allComments: action.payload,
        };
      case FETCH_COMMENT_BY_ID_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_COMMENT_BY_ID_RESET:
        return { allComments: [], loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  