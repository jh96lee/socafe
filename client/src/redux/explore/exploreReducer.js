const initialState = {
	explorePosts: [],
	exploreTopics: [],
	exploreNextAPIEndpoint: "",
	selectedExploreTopicID: null,
	isExploreTopicsLoaded: false,
};

const exploreReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_EXPLORE_TOPICS":
			return {
				...state,
				isExploreTopicsLoaded: false,
			};
		case "FETCHED_EXPLORE_TOPICS":
			return {
				...state,
				exploreTopics: action.payload,
			};
		case "END_FETCHING_EXPLORE_TOPICS":
			return {
				...state,
				isExploreTopicsLoaded: true,
			};
		case "FETCHED_EXPLORE_POSTS":
			return {
				...state,
				explorePosts: action.payload,
			};
		case "FETCHED_EXTRA_EXPLORE_POSTS":
			return {
				...state,
				explorePosts: [...state.explorePosts, ...action.payload],
			};
		case "SET_EXPLORE_NEXT_API_ENDPOINT":
			return {
				...state,
				exploreNextAPIEndpoint: action.payload,
			};
		case "SET_SELECTED_EXPLORE_TOPIC_ID":
			return {
				...state,
				selectedExploreTopicID: action.payload,
			};
		default:
			return state;
	}
};

export default exploreReducer;
