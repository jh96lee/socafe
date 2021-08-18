import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddStoryHeader from "./AddStoryHeader";
import AddStoryBackground from "./AddStoryBackground";
import AddStoryText from "./AddStoryText";
import AddStoryImage from "./AddStoryImage";
import { Button, Loader } from "../../shared";

import { uploadStory } from "../../../redux/add-story/story-upload/storyUploadAction";

import {
	AddContentFormStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddStoryContentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.8rem 1rem;

	& > *:first-child {
		padding: 0 1rem;
		margin-bottom: 3rem;
	}

	& > *:last-child {
		margin-top: 0.6rem;
	}
`;

const AddStoryForm = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { selectedStoryBackground } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	const { uploadedStoryImage, imageTop, imageLeft } = useSelector(
		(state) => state.storyImageReducer
	);

	const {
		storyTextContent,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSizeIndex,
		selectedTextColorIndex,
		textTop,
		textLeft,
	} = useSelector((state) => state.storyTextReducer);

	const { uploadedStoryID, isStoryUploading, storyUploadSuccessMessage } =
		useSelector((state) => state.storyUploadReducer);

	React.useEffect(() => {
		if (uploadedStoryID) {
			history.push(`/story/${uploadedStoryID}`);
		}
	}, [uploadedStoryID]);

	return (
		<AddContentFormStyle>
			<AddStoryHeader />

			<AddStoryContentsStyle>
				<AddStoryBackground />

				<AddStoryImage />

				<AddStoryText />
			</AddStoryContentsStyle>

			<AddContentButtonWrapperStyle>
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
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddStoryForm;
