import * as React from "react";
import { useSelector } from "react-redux";

import { TextEditor, Message } from "../../shared";

import { useTextEditor } from "../../../hooks/text-editor/useTextEditor";

import {
	setPostCaptionNodesArray,
	setPostCaptionErrorMessage,
} from "../../../redux/upload-post/post-caption/postCaptionAction";

import { AddContentStyle } from "../../../styles";

const AddPostCaption = () => {
	const { textEditorOnChangeLogic } = useTextEditor(
		500,
		"redux",
		setPostCaptionNodesArray,
		setPostCaptionErrorMessage
	);

	const { postCaptionErrorMessage } = useSelector(
		(state) => state.postCaptionReducer
	);

	return (
		<AddContentStyle>
			<h3>Caption</h3>

			<Message errorMessage={postCaptionErrorMessage} />

			<TextEditor textEditorOnChangeLogic={textEditorOnChangeLogic} />
		</AddContentStyle>
	);
};

export default AddPostCaption;
