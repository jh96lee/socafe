export const addPostCategories = (category) => ({
	type: "ADD_POST_CATEGORIES",
	payload: category,
});

export const removePostCategories = (categoryID) => ({
	type: "REMOVE_POST_CATEGORIES",
	payload: categoryID,
});

export const tagUserOnPost = (user) => ({
	type: "TAG_USER_ON_POST",
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
