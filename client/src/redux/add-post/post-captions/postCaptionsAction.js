export const setPostCaptionsNodesArray = (childNodesArray) => ({
	type: "SET_POST_CAPTIONS_NODES_ARRAY",
	payload: childNodesArray,
});

export const setPostCaptionsErrorMessage = (message) => ({
	type: "SET_POST_CAPTIONS_ERROR_MESSAGE",
	payload: message,
});
