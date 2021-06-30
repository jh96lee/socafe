const initialState = {
	isImageUploading: false,
	isImageDeleting: null,
};

const uploadImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_UPLOADING_IMAGE":
			return {
				...state,
				imageDataObject: null,
				isImageUploading: true,
			};
		case "END_UPLOADING_IMAGE":
			return {
				...state,
				isImageUploading: false,
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
		case "RESET_UPLOAD_IMAGE":
			return initialState;
		default:
			return state;
	}
};

export default uploadImageReducer;
