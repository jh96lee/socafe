import { filterArrayByID } from "../../utils/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/appendElementToPreviousArray";

const initialState = {
	postCategoriesArray: [],
	postCategoriesErrorMessage: null,
};

const postCategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_CATEGORY":
			return {
				postCategoriesErrorMessage: null,
				postCategoriesArray: appendElementToPreviousArray(
					state.postCategoriesArray,
					action.payload
				),
			};
		case "REMOVE_POST_CATEGORY":
			return {
				postCategoriesErrorMessage: null,
				postCategoriesArray: filterArrayByID(
					state.postCategoriesArray,
					action.payload
				),
			};
		case "SET_POST_CATEGORIES_ERROR_MESSAGE":
			return {
				...state,
				postCategoriesErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postCategoriesReducer;
