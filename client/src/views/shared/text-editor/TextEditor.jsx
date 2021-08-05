import * as React from "react";
import ReactQuill from "react-quill";

import { TextEditorStyle } from "./TextEditorStyle";

import "react-quill/dist/quill.snow.css";

const TextEditor = ({ textEditorOnChangeLogic }) => {
	const reactQuillRef = React.useRef();

	const handleTextEditorOnChange = () => {
		const reactQuillChildNodesArray = Array.from(
			reactQuillRef.current.editor.root.childNodes
		);

		const textEditorNodesArray = reactQuillChildNodesArray.map((node) => {
			return {
				nodeType: node.innerHTML === "<br>" ? "BR" : "P",
				nodeValue: node.innerHTML,
			};
		});

		textEditorOnChangeLogic(textEditorNodesArray);
	};

	return (
		<TextEditorStyle>
			<ReactQuill
				ref={reactQuillRef}
				onChange={handleTextEditorOnChange}
				formats={[]}
			/>
		</TextEditorStyle>
	);
};

export default TextEditor;
