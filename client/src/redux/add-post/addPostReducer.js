const initialState = {
	uploadedPostImagesArray: [],
	selectedPostCategoriesArray: [],
	taggedPostUsersArray: [],
	postCaptionNodesArray: [],
	addPostErrorMessage: null,
	addPostSuccessMessage: null,
};

const addPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_POST_IMAGE":
			return {
				...state,
				addPostErrorMessage: null,
				uploadedPostImagesArray: [
					...state.uploadedPostImagesArray,
					action.payload,
				],
			};
		case "REMOVE_POST_IMAGE":
			return {
				...state,
				addPostErrorMessage: null,
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
				addPostErrorMessage: null,
				selectedPostCategoriesArray: [
					...state.selectedPostCategoriesArray,
					action.payload,
				],
			};
		case "REMOVE_POST_CATEGORY":
			return {
				...state,
				addPostErrorMessage: null,
				selectedPostCategoriesArray: state.selectedPostCategoriesArray.filter(
					(category) => {
						return category.id !== action.payload;
					}
				),
			};
		case "ADD_USER_ON_POST":
			return {
				...state,
				addPostErrorMessage: null,
				taggedPostUsersArray: [...state.taggedPostUsersArray, action.payload],
			};
		case "REMOVE_USER_ON_POST":
			return {
				...state,
				addPostErrorMessage: null,
				taggedPostUsersArray: state.taggedPostUsersArray.filter((user) => {
					return user.id !== action.payload;
				}),
			};
		case "ADD_POST_CAPTION":
			return {
				...state,
				postCaptionNodesArray: action.payload,
			};
		case "SET_ADD_POST_SUCCESS_MESSAGE":
			return {
				...state,
				addPostErrorMessage: null,
				addPostSuccessMessage: action.payload,
			};
		case "SET_ADD_POST_ERROR_MESSAGE":
			return {
				...state,
				addPostSuccessMessage: null,
				addPostErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default addPostReducer;
