export const addPostTopics = (topic) => ({
	type: "ADD_POST_TOPIC",
	payload: topic,
});

export const removePostTopic = (topicID) => ({
	type: "REMOVE_POST_TOPIC",
	payload: topicID,
});

export const setPostTopicsErrorMessage = (errorMessage) => ({
	type: "SET_POST_TOPICS_ERROR_MESSAGE",
	payload: errorMessage,
});
