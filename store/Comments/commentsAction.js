import axios from "axios";
import {
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_ERROR,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_COMMENT_BY_ID,
  FETCH_COMMENT_BY_ID_ERROR,
  FETCH_COMMENT_BY_ID_SUCCESS,
} from "./commentsType";

// Call to get comments from API specified by post ID
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

// Call to get all comments from API
export const fetchAllComments = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_COMMENTS });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );

    dispatch({
      type: FETCH_ALL_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_COMMENTS_ERROR,
      payload: error.message,
    });
  }
};
