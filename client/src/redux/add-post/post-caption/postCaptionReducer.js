const initialState = {
	postCaptionNodesArray: [],
	postCaptionErrorMessage: null,
};

const postCaptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_POST_CAPTION_NODES_ARRAY":
			return {
				postCaptionNodesArray: action.payload,
			};
		case "SET_POST_CAPTION_ERROR_MESSAGE":
			return {
				...state,
				postCaptionErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default postCaptionReducer;
