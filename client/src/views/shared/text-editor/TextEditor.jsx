import * as React from "react";
import ReactQuill from "react-quill";

import { TextEditorStyle } from "./TextEditorStyle";

import "react-quill/dist/quill.snow.css";

const TextEditor = ({
	textEditorOnKeyUpLogic,
	initialTextEditorNodesArray,
}) => {
	const reactQuillRef = React.useRef();

	const handleTextEditorOnKeyUp = (e) => {
		if (reactQuillRef.current) {
			const reactQuillChildNodesArray = Array.from(
				reactQuillRef.current.editor.root.childNodes
			);

			const textEditorNodesArray = reactQuillChildNodesArray.map((node) => {
				return {
					nodeType: node.innerHTML === "<br>" ? "BR" : "P",
					nodeValue: node.innerHTML,
				};
			});

			textEditorOnKeyUpLogic(textEditorNodesArray);
		}
	};

	React.useEffect(() => {
		const initialPTag = reactQuillRef.current.editor.root.querySelector("p");

		reactQuillRef.current.editor.root.removeChild(initialPTag);

		if (initialTextEditorNodesArray) {
			initialTextEditorNodesArray.forEach((node) => {
				const pTag = document.createElement("p");

				if (node.node_type === "P" || node.nodeType === "P") {
					const textContentValue = node.node_value
						? node.node_value
						: node.nodeValue;

					pTag.textContent = textContentValue;

					reactQuillRef.current.editor.root.append(pTag);
				} else {
					const breakingTag = document.createElement("br");

					pTag.appendChild(breakingTag);

					reactQuillRef.current.editor.root.append(pTag);
				}
			});
		}
	}, []);

	return (
		<TextEditorStyle>
			<ReactQuill
				ref={reactQuillRef}
				onKeyUp={handleTextEditorOnKeyUp}
				formats={[]}
			/>
		</TextEditorStyle>
	);
};

export default TextEditor;
