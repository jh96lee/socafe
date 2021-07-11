const initialState = {
	followingTopics: [],
	isFollowingTopicsLoading: false,
};

const userFollowingTopicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_FOLLOWING_TOPICS":
			return {
				...state,
				isFollowingTopicsLoading: true,
			};
		case "FETCHED_FOLLOWING_TOPICS":
			return {
				...state,
				followingTopics: action.payload,
			};
		case "END_FETCHING_FOLLOWING_TOPICS":
			return {
				...state,
				isFollowingTopicsLoading: false,
			};
		case "ADD_FOLLOWING_TOPIC":
			return {
				...state,
				followingTopics: [...state.followingTopics, action.payload],
			};
		case "REMOVE_FOLLOWING_TOPIC":
			return {
				...state,
				followingTopics: state.followingTopics.filter(
					(topic) => topic.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default userFollowingTopicsReducer;
