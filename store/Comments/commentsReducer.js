import {
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_ERROR,
  FETCH_ALL_COMMENTS_RESET,
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_COMMENT_BY_ID,
  FETCH_COMMENT_BY_ID_ERROR,
  FETCH_COMMENT_BY_ID_RESET,
  FETCH_COMMENT_BY_ID_SUCCESS,
} from "./commentsType";

const initialState = {
  allComments: [],
  commentsById: [],
  commentsSuccess: false,
  commentsLoading: false,
  commentsError: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_BY_ID:
      return { ...state, commentsLoading: true, commentsSuccess: false };

    case FETCH_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        commentsSuccess: true,
        commentsById: action.payload,
      };

    case FETCH_COMMENT_BY_ID_ERROR:
      return {
        ...state,
        commentsLoading: false,
        commentsError: action.payload,
      };

    case FETCH_COMMENT_BY_ID_RESET:
      return { commentsById: [], commentsLoading: false, commentsError: null };

    case FETCH_ALL_COMMENTS:
      return { ...state, commentsLoading: true, commentsSuccess: false };

    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsLoading: false,
        commentsSuccess: true,
        allComments: action.payload,
      };

    case FETCH_ALL_COMMENTS_ERROR:
      return {
        ...state,
        commentsLoading: false,
        commentsError: action.payload,
      };

    case FETCH_ALL_COMMENTS_RESET:
      return { allComments: [], commentsLoading: false, commentsError: null };

    default:
      return state;
  }
};

export default commentsReducer;
