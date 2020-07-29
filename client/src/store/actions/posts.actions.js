import { GET_POST_ITEMS, GET_POST_ITEM } from "./actions.types";
import { POST_DATA, POST_ONE } from "data/posts.data";


// get posts
export const getPosts = () => (dispatch) => {

		dispatch({
			type: GET_POST_ITEMS,
			payload: POST_DATA,
		});
};

// Get a category
export const getPost = (id) => (dispatch) => {

		dispatch({
			type: GET_POST_ITEM,
			payload: POST_ONE,
		});
};
