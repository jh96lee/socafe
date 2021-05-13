const initialState = {
	uploadedPostImagesArray: [],
	selectedPostCategoriesArray: [],
	taggedPostUsersArray: [],
	postCaptionNodesArray: [],
};

const addPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_UPLOADED_POST_IMAGES_ARRAY":
			return {
				...state,
				uploadedPostImagesArray: [
					...state.uploadedPostImagesArray,
					action.payload,
				],
			};
		case "FILTER_UPLOADED_POST_IMAGES_ARRAY":
			return {
				...state,
				// TODO: later make this a utility function
				uploadedPostImagesArray: state.uploadedPostImagesArray.filter(
					(image) => {
						return image.id !== action.payload;
					}
				),
			};
		default:
			return state;
	}
};

export default addPostReducer;
