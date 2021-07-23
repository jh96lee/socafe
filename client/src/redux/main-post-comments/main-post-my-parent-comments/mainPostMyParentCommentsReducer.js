const initialState = {
	myParentComments: [],
	isMyParentCommentsLoaded: false,
};

const mainPostMyParentCommentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_MY_PARENT_COMMENTS":
			return {
				...state,
				isMyParentCommentsLoaded: false,
			};
		case "FETCHED_MY_PARENT_COMMENTS":
			return {
				...state,
				myParentComments: action.payload,
			};
		case "END_FETCHING_MY_PARENT_COMMENTS":
			return {
				...state,
				isMyParentCommentsLoaded: true,
			};
		case "ADD_NEW_MY_PARENT_COMMENT":
			return {
				...state,
				myParentComments: [...state.myParentComments, action.payload],
			};
		case "REMOVE_MY_PARENT_COMMENT":
			return {
				...state,
				myParentComments: state.myParentComments.filter(
					(comment) => comment.comment_id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default mainPostMyParentCommentsReducer;
