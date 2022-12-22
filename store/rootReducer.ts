import { combineReducers } from "redux";

import postsReducer from "./Posts/postsReducer";
import commentsReducer from "./Comments/commentsReducer"

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
