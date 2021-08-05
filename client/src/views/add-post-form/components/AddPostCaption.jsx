import * as React from "react";
import { useSelector } from "react-redux";

import { TextEditor, Message } from "../../shared";

import {
	setPostCaptionsNodesArray,
	setPostCaptionsErrorMessage,
} from "../../../redux/add-post/post-captions/postCaptionsAction";

import { useSaveDraft, useTextEditor } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostCaption = () => {
	const { textEditorOnChangeLogic } = useTextEditor(
		1000,
		setPostCaptionsNodesArray,
		setPostCaptionsErrorMessage
	);

	const { postCaptionsNodesArray, postCaptionsErrorMessage } = useSelector(
		(state) => state.postCaptionsReducer
	);

	useSaveDraft("postCaptions", postCaptionsNodesArray);

	return (
		<AddContentStyle>
			<h3>Caption</h3>

			<Message
				errorMessage={
					postCaptionsErrorMessage && postCaptionsErrorMessage.textEditor
				}
			/>

			<TextEditor textEditorOnChangeLogic={textEditorOnChangeLogic} />
		</AddContentStyle>
	);
};

export default AddPostCaption;
