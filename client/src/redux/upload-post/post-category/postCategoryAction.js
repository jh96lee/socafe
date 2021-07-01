export const addPostCategory = (category) => ({
	type: "ADD_POST_CATEGORY",
	payload: category,
});

export const removePostCategory = (categoryID) => ({
	type: "REMOVE_POST_CATEGORY",
	payload: categoryID,
});
