import * as React from "react";
import { useDispatch } from "react-redux";

import { calculateTotalCharacters } from "../../utils";

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

	const textEditorOnKeyUpLogic = (nodesArray) => {
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
		textEditorOnKeyUpLogic,
	};
};

export default useTextEditor;
