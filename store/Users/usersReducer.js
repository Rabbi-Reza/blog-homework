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
  userSuccess: false,
  userLoading: false,
  userError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return { ...state, userLoading: true, userSuccess: false };

    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userSuccess: true,
        userInfoByID: action.payload,
      };

    case FETCH_USER_BY_ID_ERROR:
      return { ...state, userLoading: false, userError: action.payload };

    case FETCH_USER_BY_ID_RESET:
      return { userInfoByID: [], userLoading: false, userError: null };

    case FETCH_ALL_USER:
      return { ...state, userLoading: true, userSuccess: false };

    case FETCH_ALL_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        success: true,
        allUserData: action.payload,
      };

    case FETCH_ALL_USER_ERROR:
      return { ...state, loading: false, userError: action.payload };

    case FETCH_ALL_USER_RESET:
      return { allUserData: [], loading: false, userError: null };

    default:
      return state;
  }
};

export default usersReducer;
