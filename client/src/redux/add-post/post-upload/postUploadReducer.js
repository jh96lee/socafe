const initalState = {
	postID: null,
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
		case "UPLOADED_POST":
			return {
				...state,
				postID: action.payload,
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
		default:
			return state;
	}
};

export default postUploadReducer;
