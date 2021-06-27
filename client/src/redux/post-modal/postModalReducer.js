const initialState = {
	postModalID: null,
	postModal: {},
	isPostModalLoaded: false,
	isPostModalLiked: null,
	postModalTotalLikes: null,
};

const postModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_POST_MODAL":
			return {
				...state,
				isPostModalLoaded: false,
			};
		case "FETCHED_POST_MODAL":
			return {
				...state,
				postModal: action.payload,
			};
		case "END_FETCHING_POST_MODAL":
			return {
				...state,
				isPostModalLoaded: true,
			};
		case "SET_POST_MODAL_ID":
			return {
				...state,
				postModalID: action.payload,
			};
		case "SET_IS_POST_MODAL_LIKED":
			return {
				...state,
				isPostModalLiked: action.payload,
			};
		case "SET_POST_MODAL_TOTAL_LIKES":
			return {
				...state,
				postModalTotalLikes: action.payload,
			};
		case "SET_POST_MODAL_LIKE":
			return {
				...state,
				isPostModalLiked: !state.isPostModalLiked,
			};
		case "INCREMENT_POST_MODAL_TOTAL_LIKES":
			return {
				...state,
				postModalTotalLikes: state.postModalTotalLikes + 1,
			};
		case "DECREMENT_POST_MODAL_TOTAL_LIKES":
			return {
				...state,
				postModalTotalLikes: state.postModalTotalLikes - 1,
			};
		case "RESET_POST_MODAL":
			return initialState;
		default:
			return state;
	}
};

export default postModalReducer;
