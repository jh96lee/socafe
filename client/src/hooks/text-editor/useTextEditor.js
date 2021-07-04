import * as React from "react";
import { useDispatch } from "react-redux";

import { calculateTotalCharacters } from "../../utils/text-editor/calculateTotalCharacters";

export const useTextEditor = (
	maxCharacterLength,
	setStateMethod,
	setStateNodesArrayAction,
	setStateErrorMessage
) => {
	const [textEditorNodesArray, setTextEditorNodesArray] = React.useState([]);
	const [textEditorErrorMessage, setTextEditorErrorMessage] =
		React.useState(null);

	const dispatch = useDispatch();

	const textEditorOnChangeLogic = (nodesArray) => {
		const totalCharacters = calculateTotalCharacters(nodesArray);

		if (totalCharacters > maxCharacterLength) {
			const errorMessage = `Your input must be ${maxCharacterLength} characters or fewer`;

			setStateMethod === "redux"
				? dispatch(setStateErrorMessage(errorMessage))
				: setTextEditorErrorMessage(errorMessage);
		} else {
			if (setStateMethod === "redux") {
				dispatch(setStateNodesArrayAction(nodesArray));

				dispatch(setStateErrorMessage(null));
			} else {
				setTextEditorNodesArray(nodesArray);

				setTextEditorErrorMessage(null);
			}
		}
	};

	return {
		textEditorNodesArray,
		textEditorErrorMessage,
		textEditorOnChangeLogic,
	};
};

export default useTextEditor;
