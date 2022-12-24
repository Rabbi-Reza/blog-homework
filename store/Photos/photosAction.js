import axios from "axios";
import {
  FETCH_ALL_PHOTOS,
  FETCH_ALL_PHOTOS_ERROR,
  FETCH_ALL_PHOTOS_SUCCESS,
  FETCH_PHOTO_BY_ID,
  FETCH_PHOTO_BY_ID_ERROR,
  FETCH_PHOTO_BY_ID_SUCCESS,
} from "./photosType";

// Call to get Photo from API specified by user ID
export const fetchPhotoById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PHOTO_BY_ID });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?id=${userId}`
    );

    dispatch({
      type: FETCH_PHOTO_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PHOTO_BY_ID_ERROR,
      payload: error.message,
    });
  }
};

// Call to get all Photos from API
export const fetchAllPhotos = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_PHOTOS });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );

    dispatch({
      type: FETCH_ALL_PHOTOS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_PHOTOS_ERROR,
      payload: error.message,
    });
  }
};
