import { INIT_STATE } from "../../constant";
import {
  getType,
  showModal,
  hideModal,
  showEditModal,
  hideEditModal,
} from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };

    case getType(hideModal):
      return {
        isShow: false,
      };

    case getType(showEditModal):
      return {
        isShowEdit: true,
      };

    case getType(hideEditModal):
      return {
        isShowEdit: false,
      };

    default:
      return state;
  }
}
