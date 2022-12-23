import {
  FETCH_COMMENT_BY_ID,
  FETCH_COMMENT_BY_ID_ERROR,
  FETCH_COMMENT_BY_ID_SUCCESS,
  FETCH_COMMENT_BY_ID_RESET,
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_ERROR,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_RESET,
  } from "./commentsType";


const initialState = {
    allComments: [],
    commentsById: [],
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
          commentsById: action.payload,
        };
      case FETCH_COMMENT_BY_ID_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_COMMENT_BY_ID_RESET:
        return { commentsById: [], loading: false, error: null };

        case FETCH_ALL_COMMENTS:
        return { ...state, loading: true, success: false };
  
      case FETCH_ALL_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          allComments: action.payload,
        };
      case FETCH_ALL_COMMENTS_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_ALL_COMMENTS_RESET:
        return { allComments: [], loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  