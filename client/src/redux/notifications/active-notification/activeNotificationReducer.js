const initialState = {
	notiInstigatedCommentID: null,
	notiReceivedCommentID: null,
};

const activeNotificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_NOTI_INSTIGATED_COMMENT_ID":
			return {
				...state,
				notiInstigatedCommentID: action.payload,
			};
		case "SET_NOTI_RECEIVED_COMMENT_ID":
			return {
				...state,
				notiReceivedCommentID: action.payload,
			};
		default:
			return state;
	}
};

export default activeNotificationReducer;
