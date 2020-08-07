// types
import { IMAGE_LOADED } from "store/actions/types.action";

export const isImageLoaded = () => dispatch => {

  dispatch({
    type: IMAGE_LOADED
  })
};
