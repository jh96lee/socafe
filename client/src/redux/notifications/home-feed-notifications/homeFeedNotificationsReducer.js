const initialState = {
	homeFeedNotifications: [],
	isHomeFeedNotificationsLoaded: false,
};

const homeFeedNotificationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_HOME_FEED_NOTIFICATIONS":
			return {
				...state,
				isHomeFeedNotificationsLoaded: false,
			};
		case "FETCHED_HOME_FEED_NOTIFICATIONS":
			return {
				...state,
				homeFeedNotifications: action.payload,
			};
		case "END_FETCHING_HOME_FEED_NOTIFICATIONS":
			return {
				...state,
				isHomeFeedNotificationsLoaded: true,
			};
		default:
			return state;
	}
};

export default homeFeedNotificationsReducer;
