// types
import { TOGGLE_CHANGE_PROFILE_PICTURE } from "./actions.types";

export const toggleChangeProfilePicture = () => dispatch => {

  dispatch({
    type: TOGGLE_CHANGE_PROFILE_PICTURE
  })
};