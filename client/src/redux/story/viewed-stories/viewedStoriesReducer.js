const viewedStoriesLocalStorage = JSON.parse(
	localStorage.getItem("viewedStories")
);

const initialState = {
	viewedStories: viewedStoriesLocalStorage ? viewedStoriesLocalStorage : {},
};

const viewedStoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VIEWED_STORIES":
			return {
				...state,
				viewedStories: action.payload,
			};
		default:
			return state;
	}
};

export default viewedStoriesReducer;
