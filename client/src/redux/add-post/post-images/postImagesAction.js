export const addPostImage = (image) => ({
	type: "ADD_POST_IMAGE",
	payload: image,
});

export const removePostImage = (imageID) => ({
	type: "REMOVE_POST_IMAGE",
	payload: imageID,
});
