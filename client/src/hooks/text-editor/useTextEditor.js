import * as React from "react";
import { useDispatch } from "react-redux";

import { calculateTotalCharacters } from "../../utils/text-area/calculateTotalCharacters";

export const useTextEditor = (
	maxCharactersLength,
	setStateTextEditorNodesArrayAction,
	setStateTextEditorErrorMessagesAction,
	setStateMethod = "redux"
) => {
	const [textEditorNodesArray, setTextEditorNodesArray] = React.useState([]);
	const [textEditorErrorMessage, setTextEditorErrorMessage] =
		React.useState(null);

	const dispatch = useDispatch();

	const textEditorOnChangeLogic = (nodesArray) => {
		const textEditorTotalCharacters = calculateTotalCharacters(nodesArray);

		if (textEditorTotalCharacters > maxCharactersLength) {
			const errorMessage = {
				textEditor: `Your input must be ${maxCharactersLength} characters or fewer`,
			};

			setStateMethod === "redux"
				? dispatch(setStateTextEditorErrorMessagesAction(errorMessage))
				: setTextEditorErrorMessage(errorMessage);
		} else {
			setStateMethod === "redux"
				? dispatch(setStateTextEditorErrorMessagesAction(null))
				: setTextEditorErrorMessage(null);

			setStateMethod === "redux"
				? dispatch(setStateTextEditorNodesArrayAction(nodesArray))
				: setTextEditorNodesArray(nodesArray);
		}
	};

	return {
		textEditorNodesArray,
		textEditorErrorMessage,
		textEditorOnChangeLogic,
	};
};

export default useTextEditor;
