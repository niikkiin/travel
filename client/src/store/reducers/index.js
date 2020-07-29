import { combineReducers } from 'redux';

import { createPostReducer } from 'store/reducers/create-post.reducer';
import { toggleProfileChangeReducer } from 'store/reducers/change-profile-image.reducer';
import { postReducer } from 'store/reducers/post.reducer';

export default combineReducers({
	createPost: createPostReducer,
	changeProfileImage: toggleProfileChangeReducer,
	post: postReducer
});
