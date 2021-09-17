import * as React from "react";
import ReactQuill from "react-quill";

import { calculateTotalCharacters } from "../../../utils";

import { TextEditorStyle } from "./TextEditorStyle";

import "react-quill/dist/quill.snow.css";

const TextEditor = ({
	initialNodesArray = [],
	textEditorMaxCharacters,
	handleTextEditorOnKeyUp,
}) => {
	const textEditorRef = React.useRef();

	React.useEffect(() => {
		const initialPTag = textEditorRef.current.editor.root.querySelector("p");

		textEditorRef.current.editor.root.removeChild(initialPTag);

		if (initialNodesArray.length > 0) {
			initialNodesArray.forEach((node) => {
				const pTag = document.createElement("p");

				if (node.node_type === "P" || node.nodeType === "P") {
					const textContentValue = node.node_value
						? node.node_value
						: node.nodeValue;

					pTag.textContent = textContentValue;

					textEditorRef.current.editor.root.append(pTag);
				} else {
					const brTag = document.createElement("br");

					pTag.appendChild(brTag);

					textEditorRef.current.editor.root.append(pTag);
				}
			});
		}
	}, []);

	// REVIEW: all this does is calculate total characters in the editor and prevent user from any input when limitation is exceeded
	// TODO: had to separate onKeyDown and onKeyUp, because onKeyDown does not give the most recent text values
	const handleTextEditorOnKeyDown = (e) => {
		const textEditorChildrenArray = Array.from(e.target.childNodes);

		const textEditorNodesArray = textEditorChildrenArray.map((node) => {
			return {
				nodeType: node.innerHTML === "<br>" ? "BR" : "P",
				nodeValue: node.innerHTML,
			};
		});

		const textEditorTotalCharacters =
			calculateTotalCharacters(textEditorNodesArray);

		if (textEditorTotalCharacters > textEditorMaxCharacters) {
			if (e.key === "Backspace") {
				return;
			} else {
				e.preventDefault();
			}
		}
	};

	return (
		<TextEditorStyle>
			<ReactQuill
				ref={textEditorRef}
				onKeyUp={handleTextEditorOnKeyUp}
				onKeyDown={handleTextEditorOnKeyDown}
				formats={[]}
			/>
		</TextEditorStyle>
	);
};

export default TextEditor;
