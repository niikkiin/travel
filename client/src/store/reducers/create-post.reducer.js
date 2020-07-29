const { TOGGLE_CREATE_POST_HIDDEN } = require("store/actions/actions.types");

const INITIAL_STATE = {
  hidden: false
}

export const createPostReducer = (state= INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case TOGGLE_CREATE_POST_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;   
  }
}