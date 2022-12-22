import { combineReducers } from "redux";

import postsReducer from "./Posts/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
