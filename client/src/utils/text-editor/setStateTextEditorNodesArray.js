import { calculateTotalCharacters } from "./calculateTotalCharacters";

export const setStateTextEditorNodesArray =
	(
		dispatch,
		maxLength,
		setStateMethod,
		setStateNodesArray,
		setStateErrorMessage
	) =>
	(nodesArray) => {
		const maxCharacterLength = maxLength;

		const errorMessage = `Your post caption must be ${maxCharacterLength} characters or fewer`;

		const totalCharacters = calculateTotalCharacters(nodesArray);

		if (totalCharacters < maxCharacterLength) {
			setStateMethod === "redux"
				? dispatch(setStateNodesArray(nodesArray))
				: setStateNodesArray(nodesArray);

			setStateMethod === "redux"
				? dispatch(setStateErrorMessage(null))
				: setStateErrorMessage(null);
		} else {
			setStateMethod === "redux"
				? dispatch(setStateErrorMessage(errorMessage))
				: setStateErrorMessage(errorMessage);
		}
	};
