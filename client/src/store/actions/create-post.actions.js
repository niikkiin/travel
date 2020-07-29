// types
import { TOGGLE_CREATE_POST_HIDDEN } from "./actions.types";

export const toggleCreatePost = () => dispatch => {

  dispatch({
    type: TOGGLE_CREATE_POST_HIDDEN
  })
};