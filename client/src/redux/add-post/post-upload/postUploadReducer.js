const initalState = {
	uploadedPostID: null,
	isPostUploading: false,
	postUploadSuccessMessage: null,
	postUploadErrorMessage: null,
};

const postUploadReducer = (state = initalState, action) => {
	switch (action.type) {
		case "START_UPLOADING_POST":
			return {
				...state,
				isPostUploading: true,
				postUploadErrorMessage: null,
			};
		case "SET_UPLOADED_POST_ID":
			return {
				...state,
				uploadedPostID: action.payload,
			};
		case "END_UPLOADING_POST":
			return {
				...state,
				isPostUploading: false,
			};
		case "SET_POST_UPLOAD_SUCCESS_MESSAGE":
			return {
				...state,
				postUploadSuccessMessage: action.payload,
				postUploadErrorMessage: null,
			};
		case "SET_POST_UPLOAD_ERROR_MESSAGE":
			return {
				...state,
				postUploadSuccessMessage: null,
				postUploadErrorMessage: action.payload,
			};
		case "RESET_POST_UPLOAD":
			return initalState;
		default:
			return state;
	}
};

export default postUploadReducer;
