import * as React from "react";
import ReactQuill from "react-quill";

import { TextEditorStyle } from "./TextEditorStyle";

import "react-quill/dist/quill.snow.css";

const TextEditor = ({
	textEditorOnKeyDownLogic,
	initialTextEditorNodesArray,
}) => {
	const reactQuillRef = React.useRef();

	const handleTextEditorOnKeydown = (e) => {
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

			textEditorOnKeyDownLogic(textEditorNodesArray);
		}
	};

	React.useEffect(() => {
		const initialPTag = reactQuillRef.current.editor.root.querySelector("p");

		reactQuillRef.current.editor.root.removeChild(initialPTag);

		if (initialTextEditorNodesArray) {
			initialTextEditorNodesArray.forEach(({ node_type, node_value }) => {
				const pTag = document.createElement("p");

				if (node_type === "P") {
					pTag.textContent = node_value;

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
				onKeyDown={handleTextEditorOnKeydown}
				formats={[]}
			/>
		</TextEditorStyle>
	);
};

export default TextEditor;
