import { IMAGE_LOADED } from "store/actions/types.action";

const INITIAL_STATE = {
  loading: false
}

export const isImageLoadedReducer = (state= INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case IMAGE_LOADED:
      return {
        // ...state,
        loading: true
      }
    default:
      return state;   
  }
}
