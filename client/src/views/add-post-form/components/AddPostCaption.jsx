import * as React from "react";
import { useSelector } from "react-redux";

import { TextEditor, Message } from "../../shared";

import {
	setPostCaptionNodesArray,
	setPostCaptionErrorMessage,
} from "../../../redux/add-post/post-caption/postCaptionAction";

import { useSaveDraft, useTextEditor } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostCaption = () => {
	const { textEditorOnChangeLogic } = useTextEditor(
		500,
		"redux",
		setPostCaptionNodesArray,
		setPostCaptionErrorMessage
	);

	const { postCaptionNodesArray, postCaptionErrorMessage } = useSelector(
		(state) => state.postCaptionReducer
	);

	useSaveDraft("postCaptions", postCaptionNodesArray);

	return (
		<AddContentStyle>
			<h3>Caption</h3>

			<Message errorMessage={postCaptionErrorMessage} />

			<TextEditor textEditorOnChangeLogic={textEditorOnChangeLogic} />
		</AddContentStyle>
	);
};

export default AddPostCaption;
