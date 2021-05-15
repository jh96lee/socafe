export const addPostCategories = (array) => ({
	type: "ADD_POST_CATEGORIES",
	payload: array,
});

export const removePostCategories = (array) => ({
	type: "REMOVE_POST_CATEGORIES",
	payload: array,
});

export const tagUserOnPost = (array) => ({
	type: "TAG_USER_ON_POST",
	payload: array,
});

export const removeUserOnPost = (array) => ({
	type: "REMOVE_USER_ON_POST",
	payload: array,
});
