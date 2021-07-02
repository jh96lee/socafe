import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextEditor, Message } from "../../shared";

import {
	setPostCaptionNodesArray,
	setPostCaptionErrorMessage,
} from "../../../redux/upload-post/post-caption/postCaptionAction";

import { setStateTextEditorNodesArray } from "../../../utils/text-editor/setStateTextEditorNodesArray";

import { AddContentStyle } from "../../../styles";

const AddPostCaption = () => {
	const dispatch = useDispatch();

	const { postCaptionErrorMessage } = useSelector(
		(state) => state.postCaptionReducer
	);

	return (
		<AddContentStyle>
			<h3>Caption</h3>

			<Message errorMessage={postCaptionErrorMessage} />

			<TextEditor
				setStateTextEditor={setStateTextEditorNodesArray(
					dispatch,
					500,
					"redux",
					setPostCaptionNodesArray,
					setPostCaptionErrorMessage
				)}
			/>
		</AddContentStyle>
	);
};

export default AddPostCaption;
