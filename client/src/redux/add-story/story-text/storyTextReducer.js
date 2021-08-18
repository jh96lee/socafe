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
	textSizesArray: ["1.4rem", "1.6rem", "1.8rem", "2.0rem", "2.2rem", "2.4rem"],
	storyTextContent: "",
	isBold: false,
	isItalic: false,
	isUnderline: false,
	selectedTextSizeIndex: 2,
	selectedTextColorIndex: null,
	textTop: null,
	textLeft: null,
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
		default:
			return state;
	}
};

export default storyTextReducer;
