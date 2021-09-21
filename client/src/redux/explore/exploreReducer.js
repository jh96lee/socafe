const initialState = {
	currentExplorePostsPage: 1,
	explorePosts: [],
	exploreTopics: [],
	selectedTopicIDsArray: [],
	isExplorePostsLoaded: false,
	isExploreTopicsLoaded: false,
	isExtraExplorePostsLoading: false,
	explorePostsNextAPIEndpoint: "",
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
		case "START_FETCHING_EXPLORE_POSTS":
			return {
				...state,
				isExplorePostsLoaded: false,
			};
		case "FETCHED_EXPLORE_POSTS":
			return {
				...state,
				explorePosts: action.payload,
			};
		case "END_FETCHING_EXPLORE_POSTS":
			return {
				...state,
				isExplorePostsLoaded: true,
			};
		case "START_FETCHING_EXTRA_EXPLORE_POSTS":
			return {
				...state,
				isExtraExplorePostsLoading: true,
			};
		case "FETCHED_EXTRA_EXPLORE_POSTS":
			return {
				...state,
				explorePosts: [...state.explorePosts, ...action.payload],
			};
		case "END_FETCHING_EXTRA_EXPLORE_POSTS":
			return {
				...state,
				isExtraExplorePostsLoading: false,
			};
		case "SET_EXPLORE_POSTS_PAGE":
			return {
				...state,
				currentExplorePostsPage: action.payload
					? 1
					: state.currentExplorePostsPage + 1,
			};
		case "SET_SELECTED_TOPIC_IDS_ARRAY":
			return {
				...state,
				selectedTopicIDsArray: action.payload,
			};
		case "SET_EXPLORE_POSTS_NEXT_API_ENDPOINT":
			return {
				...state,
				explorePostsNextAPIEndpoint: action.payload,
			};
		case "RESET_EXPLORE":
			return initialState;
		default:
			return state;
	}
};

export default exploreReducer;
