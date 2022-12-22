import axios from "axios";
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SUCCESS,
} from "./commentsType";

export const fetchCommentsById = (postId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COMMENTS });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );

    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COMMENTS_ERROR,
      payload: error.message,
    });
  }
};
