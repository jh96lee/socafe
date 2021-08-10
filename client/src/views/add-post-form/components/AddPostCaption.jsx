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
	const { textEditorOnKeyUpLogic } = useTextEditor(
		1000,
		setPostCaptionsNodesArray,
		setPostCaptionsErrorMessage,
		"redux"
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

			<TextEditor
				textEditorOnKeyUpLogic={textEditorOnKeyUpLogic}
				initialTextEditorNodesArray={postCaptionsNodesArray}
			/>
		</AddContentStyle>
	);
};

export default AddPostCaption;
