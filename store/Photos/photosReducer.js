import {
  FETCH_PHOTO_BY_ID,
  FETCH_PHOTO_BY_ID_ERROR,
  FETCH_PHOTO_BY_ID_SUCCESS,
  FETCH_PHOTO_BY_ID_RESET,
  FETCH_ALL_PHOTOS,
  FETCH_ALL_PHOTOS_ERROR,
  FETCH_ALL_PHOTOS_SUCCESS,
  FETCH_ALL_PHOTOS_RESET,
  } from "./photosType";


const initialState = {
    singlePhotoById: [],
    allPhotosList: [],
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
      

        case FETCH_ALL_PHOTOS:
          return { ...state, loading: true, success: false };
    
        case FETCH_ALL_PHOTOS_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true,
            allPhotosList: action.payload,
          };
        case FETCH_ALL_PHOTOS_ERROR:
          return { ...state, loading: false, error: action.payload };
        case FETCH_ALL_PHOTOS_RESET:
          return { allPhotosList: [], loading: false, error: null };
        default:
        return state;
    }
  };
  
  export default photosReducer;
  