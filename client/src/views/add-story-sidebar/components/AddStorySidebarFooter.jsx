import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Loader } from "../../shared";

import { uploadStory } from "../../../redux/add-story/story-upload/storyUploadAction";

import { PageSidebarFooterStyle } from "../../../styles";

const AddStorySidebarFooter = () => {
	const dispatch = useDispatch();

	const { uploadedStoryImage } = useSelector(
		(state) => state.storyImageReducer
	);

	const { storyTextContent } = useSelector((state) => state.storyTextReducer);

	const { isStoryUploading, storyUploadSuccessMessage } = useSelector(
		(state) => state.storyUploadReducer
	);

	return (
		<PageSidebarFooterStyle>
			<Button
				disabled={!storyTextContent && !uploadedStoryImage}
				success={storyUploadSuccessMessage}
				onClick={() => {
					dispatch(uploadStory());
				}}
			>
				{isStoryUploading ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
				) : storyUploadSuccessMessage ? (
					storyUploadSuccessMessage
				) : (
					"Submit"
				)}
			</Button>
		</PageSidebarFooterStyle>
	);
};

export default AddStorySidebarFooter;
