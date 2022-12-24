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
  postSuccess: false,
  postLoading: false,
  postError: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, postLoading: true, postSuccess: false };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postSuccess: true,
        postList: action.payload,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, postLoading: false, postError: action.payload };

    case FETCH_POSTS_RESET:
      return { postList: [], postLoading: false, postError: null };

    case FETCH_POST_BY_ID:
      return { ...state, postLoading: true, postSuccess: false };

    case FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postSuccess: true,
        singlePost: action.payload,
      };
    case FETCH_POST_BY_ID_ERROR:
      return { ...state, postLoading: false, postError: action.payload };

    case FETCH_POST_BY_ID_RESET:
      return { singlePost: [], postLoading: false, postError: null };

    default:
      return state;
  }
};

export default postsReducer;
