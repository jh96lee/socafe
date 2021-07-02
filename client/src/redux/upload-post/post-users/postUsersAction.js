export const addPostUser = (user) => ({
	type: "ADD_POST_USER",
	payload: user,
});

export const removePostUser = (userID) => ({
	type: "REMOVE_POST_USER",
	payload: userID,
});

export const setPostUsersErrorMessage = (message) => ({
	type: "SET_POST_USER_ERROR_MESSAGE",
	payload: message,
});
