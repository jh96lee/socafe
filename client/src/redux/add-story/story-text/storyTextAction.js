export const setIsStoryTextAdded = () => ({
	type: "SET_IS_STORY_TEXT_ADDED",
});

export const setStoryTextContent = (content) => ({
	type: "SET_STORY_TEXT_CONTENT",
	payload: content,
});

export const setIsBold = () => ({
	type: "SET_IS_BOLD",
});

export const setIsItalic = () => ({
	type: "SET_IS_ITALIC",
});

export const setIsUnderline = () => ({
	type: "SET_IS_UNDERLINE",
});

export const setSelectedTextColorIndex = (index) => ({
	type: "SET_SELECTED_TEXT_COLOR_INDEX",
	payload: index,
});

export const setSelectedTextSizeIndex = (index) => ({
	type: "SET_SELECTED_TEXT_SIZE_INDEX",
	payload: index,
});

export const setStoryTextTop = (top) => ({
	type: "SET_STORY_TEXT_TOP",
	payload: top,
});

export const setStoryTextLeft = (left) => ({
	type: "SET_STORY_TEXT_LEFT",
	payload: left,
});

export const setIsTextTransformed = (boolean) => ({
	type: "SET_IS_TEXT_TRANSFORMED",
	payload: boolean,
});
