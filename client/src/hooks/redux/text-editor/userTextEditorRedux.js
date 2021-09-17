import { useDispatch } from "react-redux";

import { calculateTotalCharacters } from "../../../utils";

// REVIEW: the purpose of this hook is to setState redux's errorMessage and nodesArray
export const useTextEditorRedux = (
	textEditorMaxCharacters,
	setStateTextEditorNodesArrayAction,
	setStateTextEditorErrorMessagesAction
) => {
	const dispatch = useDispatch();

	// REVIEW: onKeyUp is to setState nodesArray and errorMessage
	// REVIEW: within the TextEditor component, using onKeyDown, any input is prevented when characters limitation is exceeded
	const handleTextEditorOnKeyUp = (e) => {
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

			dispatch(setStateTextEditorErrorMessagesAction(errorMessage));
		} else {
			dispatch(setStateTextEditorErrorMessagesAction(null));

			dispatch(setStateTextEditorNodesArrayAction(textEditorNodesArray));
		}
	};

	return {
		handleTextEditorOnKeyUp,
	};
};

export default useTextEditorRedux;
