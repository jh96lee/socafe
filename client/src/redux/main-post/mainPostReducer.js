const initialState = {
	isMainPostLoaded: false,
	mainPost: {},
};

const mainPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_MAIN_POST":
			return {
				...state,
				isMainPostLoaded: false,
			};
		case "FETCHED_MAIN_POST":
			return {
				...state,
				mainPost: action.payload,
			};
		case "END_FETCHING_MAIN_POST":
			return {
				...state,
				isMainPostLoaded: true,
			};
		default:
			return state;
	}
};

export default mainPostReducer;
