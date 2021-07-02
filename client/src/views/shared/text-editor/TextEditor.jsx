import * as React from "react";
import ReactQuill from "react-quill";

import { TextEditorStyle } from "./TextEditorStyle";

import "react-quill/dist/quill.snow.css";

// REVIEW: provide the setState method or redux action that changes the caption state
const TextEditor = ({ setStateTextEditor }) => {
	const reactQuillRef = React.useRef();

	const handleOnChange = () => {
		const reactQuillChildNodesArray = Array.from(
			reactQuillRef.current.editor.root.childNodes
		);

		const childNodesDataArray = reactQuillChildNodesArray.map((node) => {
			return {
				type: node.innerHTML === "<br>" ? "br" : "p",
				content: node.innerHTML,
			};
		});

		setStateTextEditor(childNodesDataArray);
	};

	return (
		<TextEditorStyle>
			<ReactQuill ref={reactQuillRef} onChange={handleOnChange} formats={[]} />
		</TextEditorStyle>
	);
};

export default TextEditor;
