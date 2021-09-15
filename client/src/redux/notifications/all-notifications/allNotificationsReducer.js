const initialState = {
	currentAllNotificationsPage: 1,
	isAllNotificationsLoaded: false,
	isExtraAllNotificationsLoading: false,
	allNotifications: [],
	allNotificationsNextAPIEndpoint: "",
};

const allNotificationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CURRENT_ALL_NOTIFICATIONS_PAGE":
			return {
				...state,
				currentAllNotificationsPage: state.currentAllNotificationsPage + 1,
			};
		case "START_FETCHING_ALL_NOTIFICATIONS":
			return {
				...state,
				isAllNotificationsLoaded: false,
			};
		case "FETCHED_ALL_NOTIFICATIONS":
			return {
				...state,
				allNotifications: action.payload,
			};
		case "END_FETCHING_ALL_NOTIFICATIONS":
			return {
				...state,
				isAllNotificationsLoaded: true,
			};
		case "START_FETCHING_EXTRA_ALL_NOTIFICATIONS":
			return {
				...state,
				isExtraAllNotificationsLoading: true,
			};
		case "FETCHED_EXTRA_ALL_NOTIFICATIONS":
			return {
				...state,
				allNotifications: [...state.allNotifications, ...action.payload],
			};
		case "END_FETCHING_EXTRA_ALL_NOTIFICATIONS":
			return {
				...state,
				isExtraAllNotificationsLoading: false,
			};
		case "SET_ALL_NOTIFICATIONS_NEXT_API_ENDPOINT":
			return {
				...state,
				allNotificationsNextAPIEndpoint: action.payload,
			};
		default:
			return state;
	}
};

export default allNotificationsReducer;
