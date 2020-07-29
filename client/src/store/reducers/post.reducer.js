import { GET_POST_ITEMS, GET_POST_ITEM } from 'store/actions/actions.types';
import { POST_DATA, POST_ONE } from 'data/posts.data';

const INITIAL_STATE = {
	posts: POST_DATA,
	post: POST_ONE,
	loading: true,
	error: {},
};

export const postReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_POST_ITEMS:
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case GET_POST_ITEM:
			return {
				...state,
				post: payload,
				loading: false,
			};
		default:
			return state;
	}
};
