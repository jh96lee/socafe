const initialState = {
	uploadedPostImagesArray: [],
	selectedPostCategoriesArray: [],
	taggedPostUsersArray: [],
	postCaptionNodesArray: [],
};

const addPostReducer = (state = initialState, action) => {
	switch (action.type) {
		// TODO: change the naming convention
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
		case "ADD_POST_CATEGORIES":
			return {
				...state,
				selectedPostCategoriesArray: [
					...state.selectedPostCategoriesArray,
					action.payload,
				],
			};
		case "REMOVE_POST_CATEGORIES":
			return {
				...state,
				selectedPostCategoriesArray: state.selectedPostCategoriesArray.filter(
					(category) => {
						return category.id !== action.payload;
					}
				),
			};
		case "TAG_USER_ON_POST":
			return {
				...state,
				taggedPostUsersArray: action.payload,
			};
		case "REMOVE_USER_ON_POST":
			return {
				...state,
				taggedPostUsersArray: action.payload,
			};
		default:
			return state;
	}
};

export default addPostReducer;
