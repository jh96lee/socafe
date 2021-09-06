const initialState = {
	contentViewsArray: [],
	coordinatesArray: [],
	xAxisArray: [],
	yAxisArray: [],
	numberOfYAxisLines: 6,
	contentType: "post",
	isContentViewsArrayLoaded: false,
	nDaysAgo: 7,
};

const statsGraphReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_CONTENT_VIEWS_ARRAY":
			return {
				...state,
				isContentViewsArrayLoaded: false,
			};
		case "FETCHED_CONTENT_VIEWS_ARRAY":
			return {
				...state,
				contentViewsArray: action.payload,
			};
		case "END_FETCHING_CONTENT_VIEWS_ARRAY":
			return {
				...state,
				isContentViewsArrayLoaded: true,
			};
		case "SET_GRAPH_ARRAYS":
			return {
				...state,
				...action.payload,
			};
		case "SET_N_DAYS_AGO":
			return {
				...state,
				nDaysAgo: action.payload,
			};
		case "SET_CONTENT_TYPE":
			return {
				...state,
				contentType: action.payload,
			};
		default:
			return state;
	}
};

export default statsGraphReducer;
