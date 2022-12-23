import axios from "axios";
import {
  FETCH_PHOTO_BY_ID,
  FETCH_PHOTO_BY_ID_ERROR,
  FETCH_PHOTO_BY_ID_SUCCESS,
} from "./photosType";

export const fetchPhotoById = (postId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PHOTO_BY_ID });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?id=${postId}`
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
