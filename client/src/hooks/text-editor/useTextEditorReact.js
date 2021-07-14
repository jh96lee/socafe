import * as React from "react";

import { calculateTotalCharacters } from "../../utils/text-editor/calculateTotalCharacters";

export const useTextEditorReact = (maxCharacterLength) => {
	const [textEditorNodesArray, setTextEditorNodesArray] = React.useState([]);
	const [textEditorErrorMessage, setTextEditorErrorMessage] =
		React.useState(null);

	const textEditorOnChangeLogic = (nodesArray) => {
		const totalCharacters = calculateTotalCharacters(nodesArray);

		if (totalCharacters > maxCharacterLength) {
			const errorMessage = `Your input must be ${maxCharacterLength} characters or fewer`;

			setTextEditorErrorMessage(errorMessage);
		} else {
			setTextEditorNodesArray(nodesArray);

			setTextEditorErrorMessage(null);
		}
	};

	return {
		textEditorNodesArray,
		textEditorErrorMessage,
		textEditorOnChangeLogic,
	};
};

export default useTextEditorReact;
