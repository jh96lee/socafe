const initalState = {
	uploadedStoryID: null,
	isStoryUploading: false,
	storyUploadSuccessMessage: null,
	storyUploadErrorMessage: null,
};

const storyUploadReducer = (state = initalState, action) => {
	switch (action.type) {
		case "START_UPLOADING_STORY":
			return {
				...state,
				isStoryUploading: true,
				storyUploadErrorMessage: null,
			};
		case "UPLOADED_STORY":
			return {
				...state,
				uploadedStoryID: action.payload,
			};
		case "END_UPLOADING_STORY":
			return {
				...state,
				isStoryUploading: false,
			};
		case "SET_STORY_UPLOAD_SUCCESS_MESSAGE":
			return {
				...state,
				storyUploadSuccessMessage: action.payload,
				storyUploadErrorMessage: null,
			};
		case "SET_STORY_UPLOAD_ERROR_MESSAGE":
			return {
				...state,
				storyUploadSuccessMessage: null,
				storyUploadErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default storyUploadReducer;
