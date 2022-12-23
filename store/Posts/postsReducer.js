import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_RESET,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_BY_ID,
  FETCH_POST_BY_ID_ERROR,
  FETCH_POST_BY_ID_RESET,
  FETCH_POST_BY_ID_SUCCESS,
} from "./postsActionType";

const initialState = {
  postList: [],
  singlePost: [],
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

    case FETCH_POST_BY_ID:
      return { ...state, loading: true, success: false };

    case FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        singlePost: action.payload,
      };
    case FETCH_POST_BY_ID_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_POST_BY_ID_RESET:
      return { singlePost: [], loading: false, error: null };

    default:
      return state;
  }
};

export default postsReducer;
