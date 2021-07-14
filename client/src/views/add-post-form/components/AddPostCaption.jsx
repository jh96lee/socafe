import * as React from "react";
import { useSelector } from "react-redux";

import { TextEditor, Message } from "../../shared";

import {
	setPostCaptionsNodesArray,
	setPostCaptionsErrorMessage,
} from "../../../redux/add-post/post-captions/postCaptionsAction";

import { useSaveDraft, useTextEditorRedux } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostCaption = () => {
	const { textEditorOnChangeLogic } = useTextEditorRedux(
		300,
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

			<Message errorMessage={postCaptionsErrorMessage} />

			<TextEditor textEditorOnChangeLogic={textEditorOnChangeLogic} />
		</AddContentStyle>
	);
};

export default AddPostCaption;
