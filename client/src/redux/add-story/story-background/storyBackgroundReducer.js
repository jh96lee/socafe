const initialState = {
	storyBackgrounds: [
		{
			id: 1,
			type: "gradient",
			background: "linear-gradient(45deg, #363eff, #ff0000)",
		},
		{
			id: 2,
			type: "gradient",
			background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
		},
		{
			id: 3,
			type: "gradient",
			background:
				"linear-gradient(to top, #0060ef, #0091ff, #00b8ff, #00d9f7, #00f6e1)",
		},
		{
			id: 4,
			type: "gradient",
			background:
				"linear-gradient(to right bottom, #ef0056, #ef0074, #e0009b, #bc00c8, #6900f6)",
		},
		{
			id: 5,
			type: "gradient",
			background:
				"linear-gradient(to bottom, #ef1b51, #f12d81, #e44bae, #ca69d3, #a682ee, #7b98fe, #49abff, #00baff, #00ccff, #00ddff, #29ecf9, #5ffbf1)",
		},
		{
			id: 6,
			type: "gradient",
			background:
				"linear-gradient(to right top, #e7ff00, #09f77f, #00dfd4, #00bdfe, #1292eb)",
		},
		{
			id: 7,
			type: "gradient",
			background: "linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)",
		},
		{
			id: 8,
			type: "gradient",
			background: "linear-gradient(45deg, #363eff, #ff0000)",
		},
	],
	selectedStoryBackground: {},
};

const storyBackgroundReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SELECTED_STORY_BACKGROUND":
			return {
				...state,
				selectedStoryBackground: action.payload,
			};
		default:
			return state;
	}
};

export default storyBackgroundReducer;
