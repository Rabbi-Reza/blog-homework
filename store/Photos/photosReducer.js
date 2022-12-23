import {
  FETCH_PHOTO_BY_ID,
  FETCH_PHOTO_BY_ID_ERROR,
  FETCH_PHOTO_BY_ID_SUCCESS,
  FETCH_PHOTO_BY_ID_RESET
  } from "./photosType";


const initialState = {
    singlePhotoById: [],
    success: false,
    loading: false,
    error: null,
  };


const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PHOTO_BY_ID:
        return { ...state, loading: true, success: false };
  
      case FETCH_PHOTO_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          singlePhotoById: action.payload,
        };
      case FETCH_PHOTO_BY_ID_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_PHOTO_BY_ID_RESET:
        return { singlePhotoById: [], loading: false, error: null };
      default:
        return state;
    }
  };
  
  export default photosReducer;
  