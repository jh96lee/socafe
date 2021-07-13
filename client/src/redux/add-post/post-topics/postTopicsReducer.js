import { filterArrayByID } from "../../utils/common/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/common/appendElementToPreviousArray";

const postTopicsLocalStorage = JSON.parse(localStorage.getItem("postTopics"));

const initialState = {
	postTopicsArray: postTopicsLocalStorage ? postTopicsLocalStorage : [],
	postTopicsErrorMessage: null,
};

const postTopicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_TOPIC":
			return {
				postTopicsErrorMessage: null,
				postTopicsArray: appendElementToPreviousArray(
					state.postTopicsArray,
					action.payload
				),
			};
		case "REMOVE_POST_TOPIC":
			return {
				postTopicsErrorMessage: null,
				postTopicsArray: filterArrayByID(state.postTopicsArray, action.payload),
			};
		case "SET_POST_TOPICS_ERROR_MESSAGE":
			return {
				...state,
				postTopicsErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postTopicsReducer;
