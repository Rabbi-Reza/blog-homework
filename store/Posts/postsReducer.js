import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_RESET,
  FETCH_POSTS_SUCCESS,
} from "./postsActionType";

const initialState = {
  postList: [],
  success: false,
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true, success: false };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        postList: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_POSTS_RESET:
      return { postList: [], loading: false, error: null };
    default:
      return state;
  }
};

export default postsReducer;
