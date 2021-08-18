import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

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
	const { selectedStoryBackground } = getState().storyBackgroundReducer;

	const { uploadedStoryImage, imageTop, imageLeft } =
		getState().storyImageReducer;

	const {
		textColorsArray,
		textSizesArray,
		storyTextContent,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSizeIndex,
		selectedTextColorIndex,
		textTop,
		textLeft,
	} = getState().storyTextReducer;

	if (uploadedStoryImage || storyTextContent.length > 0) {
		dispatch(startUploadingStory());

		const selectedTextSize = textSizesArray[selectedTextSizeIndex];
		const selectedTextColor = textColorsArray[selectedTextColorIndex];

		const token = fetchToken();

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/upload/story",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				storyBackground: selectedStoryBackground,
				storyImage: { uploadedStoryImage, imageTop, imageLeft },
				storyText: {
					storyTextContent,
					isBold,
					isItalic,
					isUnderline,
					selectedTextSize,
					selectedTextColor,
					textTop,
					textLeft,
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
