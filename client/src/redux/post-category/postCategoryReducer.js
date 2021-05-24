const initalState = {
	isPostCategoriesLoading: false,
	postCategoriesArray: [],
};

const postCategoryReducer = (state = initalState, action) => {
	switch (action.type) {
		case "START_FETCHING_POST_CATEGORIES":
			return {
				...state,
				isPostCategoriesLoading: true,
			};
		case "FETCHED_POST_CATEGORIES":
			return {
				...state,
				postCategoriesArray: action.payload,
			};
		case "END_FETCHING_POST_CATEGORIES":
			return {
				...state,
				isPostCategoriesLoading: false,
			};
		default:
			return state;
	}
};

export default postCategoryReducer;
