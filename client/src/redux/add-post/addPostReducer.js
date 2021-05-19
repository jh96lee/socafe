const initialState = {
	uploadedPostImagesArray: [],
	selectedPostCategoriesArray: [],
	taggedPostUsersArray: [],
	postCaptionNodesArray: [],
	// REVIEW: this property's value will be an object
	addPostMessage: null,
};

const addPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_IMAGE":
			return {
				...state,
				uploadedPostImagesArray: [
					...state.uploadedPostImagesArray,
					action.payload,
				],
			};
		case "REMOVE_POST_IMAGE":
			return {
				...state,
				// TODO: later make this a utility function
				uploadedPostImagesArray: state.uploadedPostImagesArray.filter(
					(image) => {
						return image.id !== action.payload;
					}
				),
			};
		case "ADD_POST_CATEGORY":
			return {
				...state,
				selectedPostCategoriesArray: [
					...state.selectedPostCategoriesArray,
					action.payload,
				],
			};
		case "REMOVE_POST_CATEGORY":
			return {
				...state,
				selectedPostCategoriesArray: state.selectedPostCategoriesArray.filter(
					(category) => {
						return category.id !== action.payload;
					}
				),
			};
		case "ADD_USER_ON_POST":
			return {
				...state,
				taggedPostUsersArray: [...state.taggedPostUsersArray, action.payload],
			};
		case "REMOVE_USER_ON_POST":
			return {
				...state,
				taggedPostUsersArray: state.taggedPostUsersArray.filter((user) => {
					return user.id !== action.payload;
				}),
			};
		case "ADD_POST_CAPTION":
			return {
				...state,
				postCaptionNodesArray: action.payload,
			};
		case "SET_ADD_POST_MESSAGE":
			return {
				...state,
				addPostMessage: action.payload,
			};
		default:
			return state;
	}
};

export default addPostReducer;
