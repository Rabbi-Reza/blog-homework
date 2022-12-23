import axios from "axios";
import {
  FETCH_COMMENT_BY_ID,
  FETCH_COMMENT_BY_ID_ERROR,
  FETCH_COMMENT_BY_ID_SUCCESS,
} from "./commentsType";

export const fetchCommentsById = (postId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COMMENT_BY_ID });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );

    dispatch({
      type: FETCH_COMMENT_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COMMENT_BY_ID_ERROR,
      payload: error.message,
    });
  }
};
