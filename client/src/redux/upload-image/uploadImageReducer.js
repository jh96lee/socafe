const initialState = {
	isImageUploading: false,
	isImageDeleting: null,
	uploadImageErrorMessage: null,
	uploadImageSuccessMessage: null,
};

const uploadImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_UPLOADING_IMAGE":
			return {
				...state,
				uploadImageErrorMessage: null,
				uploadImageSuccessMessage: null,
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
				uploadImageSuccessMessage: null,
				uploadImageErrorMessage: action.payload,
			};
		case "SET_UPLOAD_IMAGE_SUCCESS_MESSAGE":
			return {
				...state,
				uploadImageErrorMessage: null,
				uploadImageSuccessMessage: action.payload,
			};
		case "START_DELETING_IMAGE":
			return {
				...state,
				uploadImageErrorMessage: null,
				uploadImageSuccessMessage: null,
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
