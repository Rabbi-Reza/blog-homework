import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_BY_ID,
  FETCH_POST_BY_ID_ERROR,
  FETCH_POST_BY_ID_SUCCESS,
  
} from "./postsActionType";

export const fetchAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: response.data.slice(0, 20),
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_ERROR,
      payload: error.message,
    });
  }
};

export const fetchPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POST_BY_ID });

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: FETCH_POST_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POST_BY_ID_ERROR,
      payload: error.message,
    });
  }
};
