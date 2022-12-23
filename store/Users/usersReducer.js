import {
  FETCH_ALL_USER,
  FETCH_ALL_USER_ERROR,
  FETCH_ALL_USER_RESET,
  FETCH_ALL_USER_SUCCESS,
  FETCH_USER_BY_ID,
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_RESET,
  FETCH_USER_BY_ID_SUCCESS,
} from "./usersType";

const initialState = {
  userInfoByID: [],
  allUserData: [],
  success: false,
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return { ...state, loading: true, success: false };

    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfoByID: action.payload,
      };
    case FETCH_USER_BY_ID_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_USER_BY_ID_RESET:
      return { userInfoByID: [], loading: false, error: null };

    case FETCH_ALL_USER:
      return { ...state, loading: true, success: false };

    case FETCH_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        allUserData: action.payload,
      };
    case FETCH_ALL_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_ALL_USER_RESET:
      return { allUserData: [], loading: false, error: null };
    default:
      return state;
  }
};

export default usersReducer;
