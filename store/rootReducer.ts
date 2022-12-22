import { combineReducers } from "redux";

import postsReducer from "./Posts/postsReducer";
import commentsReducer from "./Comments/commentsReducer"
import usersReducer from './Users/usersReducer'
const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;
