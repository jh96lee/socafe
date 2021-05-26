const initialState = {
	isCategoryOfInterestPosting: false,
	// TODO: fetch for user's category of interest
	isCategoryOfInterestLoading: false,
	categoryOfInterestArray: [],
	errorMessage: null,
	successMessage: null,
};

const categoryOfInterestReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_POSTING_CATEGORY_OF_INTEREST":
			return {
				...state,
				isCategoryOfInterestPosting: true,
			};
		case "END_POSTING_CATEGORY_OF_INTEREST":
			return {
				...state,
				isCategoryOfInterestPosting: false,
			};
		case "SET_CATEGORY_OF_INTEREST_ERROR_MESSAGE":
			return {
				...state,
				errorMessage: action.payload,
			};
		case "SET_CATEGORY_OF_INTEREST_SUCCESS_MESSAGE":
			return {
				...state,
				successMessage: action.payload,
			};
		case "RESET_CATEGORY_OF_INTEREST":
			return initialState;
		default:
			return state;
	}
};

export default categoryOfInterestReducer;
