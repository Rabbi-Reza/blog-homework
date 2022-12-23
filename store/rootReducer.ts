import { combineReducers } from "redux";

import postsReducer from "./Posts/postsReducer";
import commentsReducer from "./Comments/commentsReducer"
import usersReducer from './Users/usersReducer'
import photosReducer from './Photos/photosReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
  photos: photosReducer,
});

export default rootReducer;
