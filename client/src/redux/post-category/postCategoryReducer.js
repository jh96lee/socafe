const initalState = {
	isCategoriesLoaded: false,
	categories: [],
	isCategoriesOfInterestLoaded: false,
	categoriesOfInterest: [],
	isCategoriesOfInterestPosted: false,
	categoriesOfInterestResult: null,
};

const postCategoryReducer = (state = initalState, action) => {
	switch (action.type) {
		case "START_FETCHING_POST_CATEGORIES":
			return {
				...state,
				isCategoriesLoaded: false,
			};
		case "FETCHING_POST_CATEGORIES":
			return {
				...state,
				categories: action.payload,
			};
		case "END_FETCHING_POST_CATEGORIES":
			return {
				...state,
				isCategoriesLoaded: true,
			};
		case "START_POSTING_CATEGORIES_OF_INTEREST":
			return {
				...state,
				isCategoriesOfInterestPosted: false,
			};
		case "POSTING_CATEGORIES_OF_INTEREST":
			return {
				...state,
				categoriesOfInterestResult: action.payload,
			};
		case "END_POSTING_CATEGORIES_OF_INTEREST":
			return {
				...state,
				isCategoriesOfInterestPosted: true,
			};
		default:
			return state;
	}
};

export default postCategoryReducer;
