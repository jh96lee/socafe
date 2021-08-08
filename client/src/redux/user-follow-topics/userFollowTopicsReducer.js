const initialState = {
	followTopics: [],
	isFollowTopicsLoading: false,
	isTopicsToFollowSubmitting: false,
	userFollowTopicsSuccessMessage: null,
	userFollowTopicsErrorMessage: null,
	isTopicsToFollowUpdating: false,
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
				isTopicsToFollowSubmitting: true,
				userFollowTopicsErrorMessage: null,
			};
		case "END_SUBMITTING_TOPICS_TO_FOLLOW":
			return {
				...state,
				isTopicsToFollowSubmitting: false,
			};
		case "START_UPDATING_TOPICS_TO_FOLLOW":
			return {
				...state,
				isTopicsToFollowUpdating: true,
				userFollowTopicsErrorMessage: null,
			};
		case "END_UPDATING_TOPICS_TO_FOLLOW":
			return {
				...state,
				isTopicsToFollowUpdating: false,
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
		case "RESET_USER_FOLLOW_TOPICS":
			return initialState;
		default:
			return state;
	}
};

export default userFollowTopicsReducer;
