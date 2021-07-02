export const setPostCaptionNodesArray = (childNodesArray) => ({
	type: "SET_POST_CAPTION_NODES_ARRAY",
	payload: childNodesArray,
});

export const setPostCaptionErrorMessage = (message) => ({
	type: "SET_POST_CAPTION_ERROR_MESSAGE",
	payload: message,
});
