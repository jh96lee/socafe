import * as React from "react";

import { calculateTotalCharacters } from "../../../utils";

export const useTextEditorReact = (
	initialNodesArray = [],
	textEditorMaxCharacters
) => {
	const [nodesArray, setNodesArray] = React.useState(initialNodesArray);
	const [errorMessage, setErrorMessage] = React.useState(null);

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
			const errorMessage = {
				textEditor: `Your input must be ${textEditorMaxCharacters} characters or fewer`,
			};

			setErrorMessage(errorMessage);

			if (e.key === "Backspace") {
				return;
			} else {
				e.preventDefault();
			}
		} else {
			setErrorMessage(null);

			setNodesArray(textEditorNodesArray);
		}
	};

	return {
		nodesArray,
		errorMessage,
		handleTextEditorOnKeyDown,
	};
};

export default useTextEditorReact;
