const initialState = {
	isImageUploading: false,
	isImageDeleting: null,
	errorMessage: null,
	successMessage: null,
};

const uploadImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_UPLOADING_IMAGE":
			return {
				...state,
				errorMessage: null,
				successMessage: null,
				isImageUploading: true,
			};
		case "END_UPLOADING_IMAGE":
			return {
				...state,
				isImageUploading: false,
			};
		case "SET_UPLOAD_IMAGE_ERROR_MESSAGE":
			return {
				...state,
				errorMessage: action.payload,
			};
		case "SET_UPLOAD_IMAGE_SUCCESS_MESSAGE":
			return {
				...state,
				successMessage: action.payload,
			};
		case "START_DELETING_IMAGE":
			return {
				...state,
				errorMessage: null,
				successMessage: null,
				isImageDeleting: true,
			};
		case "END_DELETING_IMAGE":
			return {
				...state,
				isImageDeleting: false,
			};
		default:
			return state;
	}
};

export default uploadImageReducer;
