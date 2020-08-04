// types
import { TOGGLE_CHANGE_PROFILE_PICTURE } from "./types.action";

export const toggleChangeProfilePicture = () => dispatch => {

  dispatch({
    type: TOGGLE_CHANGE_PROFILE_PICTURE
  })
};

