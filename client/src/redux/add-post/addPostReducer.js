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
		default:
			return state;
	}
};

export default addPostReducer;
