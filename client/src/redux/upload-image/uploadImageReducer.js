const initialState = {
	isImageUploading: false,
	isImageDeleting: null,
	uploadImageMessage: null,
};

const uploadImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_UPLOADING_IMAGE":
			return {
				...state,
				isImageUploading: true,
			};
		case "END_UPLOADING_IMAGE":
			return {
				...state,
				isImageUploading: false,
			};
		case "SET_UPLOAD_IMAGE_MESSAGE":
			return {
				...state,
				uploadImageMessage: action.payload,
			};
		case "START_DELETING_IMAGE":
			return {
				...state,
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
