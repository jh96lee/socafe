import { filterArrayByID } from "../../utils/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/appendElementToPreviousArray";

const initialState = {
	postUsersArray: [],
	postUsersErrorMessage: null,
};

const postUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_USER":
			return {
				postUsersErrorMessage: null,
				postUsersArray: appendElementToPreviousArray(
					state.postUsersArray,
					action.payload
				),
			};
		case "REMOVE_POST_USER":
			return {
				postUsersErrorMessage: null,
				postUsersArray: filterArrayByID(state.postUsersArray, action.payload),
			};
		case "SET_POST_USER_ERROR_MESSAGE":
			return {
				...state,
				postUsersErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postUserReducer;
