import {
  FETCH_ALL_PHOTOS,
  FETCH_ALL_PHOTOS_ERROR,
  FETCH_ALL_PHOTOS_RESET,
  FETCH_ALL_PHOTOS_SUCCESS,
  FETCH_PHOTO_BY_ID,
  FETCH_PHOTO_BY_ID_ERROR,
  FETCH_PHOTO_BY_ID_RESET,
  FETCH_PHOTO_BY_ID_SUCCESS,
} from "./photosType";

const initialState = {
  singlePhotoById: [],
  allPhotosList: [],
  photosSuccess: false,
  photosLoading: false,
  photosError: null,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_BY_ID:
      return { ...state, photosLoading: true, photosSuccess: false };

    case FETCH_PHOTO_BY_ID_SUCCESS:
      return {
        ...state,
        photosLoading: false,
        photosSuccess: true,
        singlePhotoById: action.payload,
      };

    case FETCH_PHOTO_BY_ID_ERROR:
      return { ...state, photosLoading: false, photosError: action.payload };

    case FETCH_PHOTO_BY_ID_RESET:
      return { singlePhotoById: [], photosLoading: false, photosError: null };

    case FETCH_ALL_PHOTOS:
      return { ...state, photosLoading: true, photosSuccess: false };

    case FETCH_ALL_PHOTOS_SUCCESS:
      return {
        ...state,
        photosLoading: false,
        photosSuccess: true,
        allPhotosList: action.payload,
      };

    case FETCH_ALL_PHOTOS_ERROR:
      return { ...state, photosLoading: false, photosError: action.payload };

    case FETCH_ALL_PHOTOS_RESET:
      return { allPhotosList: [], photosLoading: false, photosError: null };

    default:
      return state;
  }
};

export default photosReducer;
