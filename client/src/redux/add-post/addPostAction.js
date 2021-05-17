export const addPostCategory = (category) => ({
	type: "ADD_POST_CATEGORY",
	payload: category,
});

export const removePostCategory = (categoryID) => ({
	type: "REMOVE_POST_CATEGORY",
	payload: categoryID,
});

export const addUserOnPost = (user) => ({
	type: "ADD_USER_ON_POST",
	payload: user,
});

export const removeUserOnPost = (userID) => ({
	type: "REMOVE_USER_ON_POST",
	payload: userID,
});

export const addPostCaption = (childNodesArray) => ({
	type: "ADD_POST_CAPTION",
	payload: childNodesArray,
});
