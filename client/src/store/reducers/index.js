import { combineReducers } from 'redux';

// reducers
import { createPostReducer } from 'store/reducers/create-post.reducer';
import { toggleProfileChangeReducer } from 'store/reducers/change-profile-image.reducer';

export default combineReducers({
  createPost: createPostReducer,
  changeProfileImage: toggleProfileChangeReducer,
});