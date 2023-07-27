import { INIT_STATE } from "../../constant";
import { getType, setAnchorEl, clearAnchorEl } from "../actions";

export default function popoverReducer(state = INIT_STATE.popover, action) {
  switch (action.type) {
    case getType(setAnchorEl):
      return {
        anchorEl: action.payload,
      };

    case getType(clearAnchorEl):
      return {
        anchorEl: null,
      };

    default:
      return state;
  }
}
