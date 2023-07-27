import { combineReducers } from "redux";
import posts from "./posts";
import modal from "./modal";
import popover from "./popoverMenu";

export default combineReducers({
  posts,
  modal,
  popover,
});
