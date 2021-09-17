import axios from "axios";

import { fetchToken } from "../../../utils";

const startUploadingStory = () => ({
	type: "START_UPLOADING_STORY",
});

const uploadedStory = (storyID) => ({
	type: "UPLOADED_STORY",
	payload: storyID,
});

const endUploadingStory = () => ({
	type: "END_UPLOADING_STORY",
});

const setStoryUploadSuccessMessage = (message) => ({
	type: "SET_STORY_UPLOAD_SUCCESS_MESSAGE",
	payload: message,
});

const setSuccessUploadErrorMessage = (message) => ({
	type: "SET_STORY_UPLOAD_ERROR_MESSAGE",
	payload: message,
});

export const uploadStory = () => async (dispatch, getState) => {
	const { storyBackgrounds, selectedStoryBackgroundIndex } =
		getState().storyBackgroundReducer;

	const { uploadedStoryImage, imageTop, imageLeft, isImageTransformed } =
		getState().storyImageReducer;

	const {
		textColorsArray,
		textSizeRatiosArray,
		storyTextContent,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSizeRatioIndex,
		selectedTextColorIndex,
		textTop,
		textLeft,
		isTextTransformed,
	} = getState().storyTextReducer;

	if (uploadedStoryImage || storyTextContent.length > 0) {
		dispatch(startUploadingStory());

		const selectedTextSizeRatio =
			textSizeRatiosArray[selectedTextSizeRatioIndex].ratio;
		const selectedTextColor = textColorsArray[selectedTextColorIndex];

		const token = fetchToken();

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/upload/story",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				storyBackground: storyBackgrounds[selectedStoryBackgroundIndex],
				storyImage: {
					uploadedStoryImage,
					imageTop,
					imageLeft,
					isImageTransformed,
				},
				storyText: {
					storyTextContent,
					isBold,
					isItalic,
					isUnderline,
					selectedTextSizeRatio,
					selectedTextColor,
					textTop,
					textLeft,
					isTextTransformed,
				},
			},
		});

		const { storyID, success, error } = data;

		if (storyID && success) {
			dispatch(setStoryUploadSuccessMessage(success));

			dispatch(uploadedStory(storyID));

			dispatch(endUploadingStory());
		} else {
			dispatch(setSuccessUploadErrorMessage(error));

			dispatch(endUploadingStory());
		}
	}
};
