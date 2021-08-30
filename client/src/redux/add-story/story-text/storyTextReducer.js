const initialState = {
	isStoryTextAdded: false,
	textColorsArray: [
		"#fff",
		"#000",
		"#78FFF1",
		"#E1FCFD",
		"#0072B5",
		"#FF4838",
		"#F1B814",
		"#1FC58E",
		"#D2386C",
		"#361999",
		"#05F4B7",
		"#E5B9A8",
		"#00ABE1",
		"#FDD935",
	],
	textSizeRatiosArray: [
		{ label: "ES", ratio: 0.018 },
		{ label: "S", ratio: 0.022 },
		{ label: "M", ratio: 0.026 },
		{ label: "L", ratio: 0.03 },
		{ label: "EL", ratio: 0.034 },
	],
	storyTextContent: "",
	isBold: false,
	isItalic: false,
	isUnderline: false,
	// REVIEW: fix
	selectedTextSizeRatioIndex: 2,
	selectedTextColorIndex: 0,
	textTop: null,
	textLeft: null,
	isTextTransformed: null,
};

const storyTextReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_STORY_TEXT_ADDED":
			return {
				...state,
				isStoryTextAdded: !state.isStoryTextAdded,
			};
		case "SET_STORY_TEXT_CONTENT":
			return {
				...state,
				storyTextContent: action.payload,
			};
		case "SET_IS_BOLD":
			return { ...state, isBold: !state.isBold };
		case "SET_IS_ITALIC":
			return { ...state, isItalic: !state.isItalic };
		case "SET_IS_UNDERLINE":
			return { ...state, isUnderline: !state.isUnderline };
		case "SET_SELECTED_TEXT_COLOR_INDEX":
			return {
				...state,
				selectedTextColorIndex: action.payload,
			};
		case "SET_SELECTED_TEXT_SIZE_INDEX":
			return {
				...state,
				selectedTextSizeIndex: action.payload,
			};
		case "SET_SELECTED_TEXT_SIZE_RATIO_INDEX":
			return {
				...state,
				selectedTextSizeRatioIndex: action.payload,
			};
		case "SET_STORY_TEXT_TOP":
			return {
				...state,
				textTop: action.payload,
			};
		case "SET_STORY_TEXT_LEFT":
			return {
				...state,
				textLeft: action.payload,
			};
		case "SET_IS_TEXT_TRANSFORMED":
			return {
				...state,
				isTextTransformed: action.payload,
			};
		case "RESET_STORY_TEXT":
			return initialState;
		default:
			return state;
	}
};

export default storyTextReducer;
