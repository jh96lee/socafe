import { filterArrayByID } from "../../utils/common/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/common/appendElementToPreviousArray";

const postImagesLocalStorage = JSON.parse(localStorage.getItem("postImages"));

const initialState = {
	uploadedPostImagesArray: postImagesLocalStorage ? postImagesLocalStorage : [],
};

const postImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_IMAGE":
			return {
				...state,
				uploadedPostImagesArray: appendElementToPreviousArray(
					state.uploadedPostImagesArray,
					action.payload
				),
			};
		case "REMOVE_POST_IMAGE":
			return {
				...state,
				uploadedPostImagesArray: filterArrayByID(
					state.uploadedPostImagesArray,
					action.payload
				),
			};
		default:
			return state;
	}
};

export default postImageReducer;
