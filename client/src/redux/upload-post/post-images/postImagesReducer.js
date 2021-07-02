import { filterArrayByID } from "../../utils/filterArrayByID";
import { appendElementToPreviousArray } from "../../utils/appendElementToPreviousArray";

const initialState = {
	isPostImageUploading: false,
	isPostImageDeleting: false,
	uploadedPostImagesArray: [],
	postImagesSuccessMessage: null,
	postImagesErrorMessage: null,
};

const postImageReducer = (state = initialState, action) => {
	switch (action.type) {
		// REVIEW: Starting action types
		case "START_UPLOADING_POST_IMAGE":
			return {
				...state,
				isPostImageUploading: true,
				postImagesSuccessMessage: null,
				postImagesErrorMessage: null,
			};
		case "START_DELETING_POST_IMAGE":
			return {
				...state,
				isPostImageDeleting: true,
				postImagesSuccessMessage: null,
				postImagesErrorMessage: null,
			};
		// REVIEW: Ending action types
		case "END_UPLOADING_POST_IMAGE":
			return {
				...state,
				isPostImageUploading: false,
			};
		case "END_DELETING_POST_IMAGE":
			return {
				...state,
				isPostImageDeleting: false,
			};
		// REVIEW: Add or Removal from array action types
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
		// REVIEW: Set stating messages action types
		case "SET_POST_IMAGES_SUCCESS_MESSAGE":
			return {
				...state,
				postImagesSuccessMessage: action.payload,
			};
		case "SET_POST_IMAGES_ERROR_MESSAGE":
			return {
				...state,
				postImagesErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postImageReducer;
