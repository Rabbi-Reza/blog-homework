import axios from 'axios';
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_RESET } from './postsActionType';


export const fetchAllPosts = () => async (dispatch) => {
    try {
      dispatch({ type: FETCH_POSTS });

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: response.data.slice(0, 20)
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_ERROR,
        payload: error.message
      });
    }
  };