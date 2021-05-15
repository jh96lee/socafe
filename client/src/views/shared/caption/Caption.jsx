import * as React from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";

import { CaptionStyle } from "./CaptionStyle";

import { addPostCaption } from "../../../redux/add-post/addPostAction";

import "react-quill/dist/quill.snow.css";

const Caption = ({ captionType }) => {
	const dispatch = useDispatch();

	const reactQuillRef = React.useRef();

	const handleOnChange = () => {
		const reactQuillChildNodesArray = Array.from(
			reactQuillRef.current.editor.root.childNodes
		);

		const childNodesDataArray = reactQuillChildNodesArray.map((node) => {
			return {
				type: node.nodeName,
				content: node.innerHTML,
			};
		});

		const addChildNodesArrayAction =
			captionType === "caption" ? addPostCaption : "";

		dispatch(addChildNodesArrayAction(childNodesDataArray));
	};

	return (
		<CaptionStyle>
			<ReactQuill ref={reactQuillRef} onChange={handleOnChange} formats={[]} />
		</CaptionStyle>
	);
};

export default Caption;
