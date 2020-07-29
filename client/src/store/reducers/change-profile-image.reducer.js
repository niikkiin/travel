const { TOGGLE_CHANGE_PROFILE_PICTURE } = require("store/actions/actions.types");

const INITIAL_STATE = {
  hidden: false
}

export const toggleProfileChangeReducer = (state= INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case TOGGLE_CHANGE_PROFILE_PICTURE:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;   
  }
}