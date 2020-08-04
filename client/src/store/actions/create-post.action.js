// types
import { TOGGLE_CREATE_POST_HIDDEN } from "store/actions/types.action";

export const toggleCreatePost = () => dispatch => {

  dispatch({
    type: TOGGLE_CREATE_POST_HIDDEN
  })
};
