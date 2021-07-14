import { useDispatch } from "react-redux";

import { calculateTotalCharacters } from "../../utils/text-editor/calculateTotalCharacters";

export const useTextEditorRedux = (
	maxCharacterLength,
	setStateNodesArrayAction,
	setStateErrorMessageAction
) => {
	const dispatch = useDispatch();

	const textEditorOnChangeLogic = (nodesArray) => {
		const totalCharacters = calculateTotalCharacters(nodesArray);

		if (totalCharacters > maxCharacterLength) {
			const errorMessage = `Your input must be ${maxCharacterLength} characters or fewer`;

			dispatch(setStateErrorMessageAction(errorMessage));
		} else {
			dispatch(setStateNodesArrayAction(nodesArray));

			dispatch(setStateErrorMessageAction(null));
		}
	};

	return {
		textEditorOnChangeLogic,
	};
};

export default useTextEditorRedux;
