const initialState = {
	otherParentComments: [],
	isOtherParentCommentsLoaded: false,
};

const mainPostOtherParentCommentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_OTHER_PARENT_COMMENTS":
			return {
				...state,
				isOtherParentCommentsLoaded: false,
			};
		case "FETCHED_OTHER_PARENT_COMMENTS":
			return {
				...state,
				otherParentComments: action.payload,
			};
		case "END_FETCHING_OTHER_PARENT_COMMENTS":
			return {
				...state,
				isOtherParentCommentsLoaded: true,
			};
		default:
			return state;
	}
};

export default mainPostOtherParentCommentsReducer;
