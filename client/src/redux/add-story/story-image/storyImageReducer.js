const initialState = {
	uploadedStoryImage: null,
	imageTop: null,
	imageLeft: null,
	isImageTransformed: null,
};

const storyImageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_UPLOADED_STORY_IMAGE":
			return {
				...state,
				uploadedStoryImage: action.payload,
			};
		case "SET_UPLOADED_STORY_IMAGE_TOP":
			return {
				...state,
				imageTop: action.payload,
			};
		case "SET_UPLOADED_STORY_IMAGE_LEFT":
			return {
				...state,
				imageLeft: action.payload,
			};
		case "SET_IS_UPLOADED_STORY_IMAGE_TRANSFORMED":
			return {
				...state,
				isImageTransformed: action.payload,
			};
		default:
			return state;
	}
};

export default storyImageReducer;
