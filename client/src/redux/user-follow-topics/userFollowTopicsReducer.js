const initialState = {
	followTopics: [],
	isFollowTopicsLoading: false,
	isTopicsToFollowSubmitting: false,
	userFollowTopicsSuccessMessage: null,
	userFollowTopicsErrorMessage: null,
};

const userFollowTopicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_FOLLOW_TOPICS":
			return {
				...state,
				isFollowTopicsLoading: true,
			};
		case "FETCHED_FOLLOW_TOPICS":
			return {
				...state,
				followTopics: action.payload,
			};
		case "END_FETCHING_FOLLOW_TOPICS":
			return {
				...state,
				isFollowTopicsLoading: false,
			};
		case "START_SUBMITTING_TOPICS_TO_FOLLOW":
			return {
				...state,
				userFollowTopicsErrorMessage: null,
				isTopicsToFollowSubmitting: true,
			};
		case "END_SUBMITTING_TOPICS_TO_FOLLOW":
			return {
				...state,
				isTopicsToFollowSubmitting: false,
			};
		case "SET_USER_FOLLOW_TOPICS_ERROR_MESSAGE":
			return {
				...state,
				userFollowTopicsErrorMessage: action.payload,
			};
		case "SET_USER_FOLLOW_TOPICS_SUCCESS_MESSAGE":
			return {
				...state,
				userFollowTopicsSuccessMessage: action.payload,
				userFollowTopicsErrorMessage: null,
			};
		default:
			return state;
	}
};

export default userFollowTopicsReducer;
