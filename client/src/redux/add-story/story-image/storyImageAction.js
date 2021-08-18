export const setUploadedStoryImage = (imageObject) => ({
	type: "SET_UPLOADED_STORY_IMAGE",
	payload: imageObject,
});

export const setUploadedStoryImageTop = (top) => ({
	type: "SET_UPLOADED_STORY_IMAGE_TOP",
	payload: top,
});

export const setUploadedStoryImageLeft = (left) => ({
	type: "SET_UPLOADED_STORY_IMAGE_LEFT",
	payload: left,
});
