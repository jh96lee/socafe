import { filterArrayByID } from "../../utils/common/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/common/appendElementToPreviousArray";

const postUsersLocalStorage = JSON.parse(localStorage.getItem("postUsers"));

const initialState = {
	postUsersArray: postUsersLocalStorage ? postUsersLocalStorage : [],
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
