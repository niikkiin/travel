import { TOGGLE_CREATE_POST_HIDDEN } from "store/actions/types.action";

const INITIAL_STATE = {
  hidden: false
}

export const createPostReducer = (state= INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case TOGGLE_CREATE_POST_HIDDEN:
      return {
        // ...state,
        hidden: !state.hidden
      }
    default:
      return state;   
  }
}
