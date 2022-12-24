import { combineReducers } from "redux";

import commentsReducer from "./Comments/commentsReducer";
import photosReducer from "./Photos/photosReducer";
import postsReducer from "./Posts/postsReducer";
import usersReducer from "./Users/usersReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
  photos: photosReducer,
});

export default rootReducer;
