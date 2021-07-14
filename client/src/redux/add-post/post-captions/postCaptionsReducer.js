const postCaptionsLocalStorage = JSON.parse(
	localStorage.getItem("postCaptions")
);

const initialState = {
	postCaptionsNodesArray: postCaptionsLocalStorage
		? postCaptionsLocalStorage
		: [],
	postCaptionsErrorMessage: null,
};

const postCaptionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_POST_CAPTIONS_NODES_ARRAY":
			return {
				postCaptionsNodesArray: action.payload,
			};
		case "SET_POST_CAPTIONS_ERROR_MESSAGE":
			return {
				...state,
				postCaptionsErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postCaptionsReducer;
