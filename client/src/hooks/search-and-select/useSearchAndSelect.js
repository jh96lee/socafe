import * as React from "react";
import { useDispatch } from "react-redux";

export const useSearchAndSelect = (
	maxContentsLength,
	contentType,
	setStateMethod,
	reduxSelectedElementsArray,
	addContentAction,
	removeContentAction,
	setStateErrorMessage
) => {
	const [selectedElementsArray, setSelectedElementsArray] = React.useState([]);
	const [selectElementErrorMessage, setSelectElementErrorMessage] =
		React.useState(null);

	const elementsArray =
		setStateMethod === "redux"
			? reduxSelectedElementsArray
			: selectedElementsArray;

	const dispatch = useDispatch();

	const searchAndSelectDropdownElementOnClickLogic = (selectedElement) => {
		const maxSelectedContentsErrorMessage = `You can select up to ${maxContentsLength} ${contentType}`;
		const duplicateContentsErrorMessage = `Duplicate ${contentType} cannot be selected`;

		if (elementsArray.length >= maxContentsLength) {
			setStateMethod === "redux"
				? dispatch(setStateErrorMessage(maxSelectedContentsErrorMessage))
				: setSelectElementErrorMessage(maxSelectedContentsErrorMessage);

			return;
		}

		const elementIDsArray = elementsArray.map((element) => {
			return element.id;
		});

		if (elementIDsArray.includes(selectedElement.id)) {
			setStateMethod === "redux"
				? dispatch(setStateErrorMessage(duplicateContentsErrorMessage))
				: setSelectElementErrorMessage(duplicateContentsErrorMessage);

			return;
		}

		if (setStateMethod === "redux") {
			dispatch(addContentAction(selectedElement));
		} else {
			setSelectedElementsArray((prevState) => [...prevState, selectedElement]);

			setSelectElementErrorMessage(null);
		}
	};

	const selectedElementOnClickLogic = (elementID) => {
		if (setStateMethod === "redux") {
			dispatch(removeContentAction(elementID));
		} else {
			setSelectElementErrorMessage(null);

			setSelectedElementsArray((prevState) => {
				return prevState.filter((element) => {
					return element.id !== elementID;
				});
			});
		}
	};

	return {
		searchAndSelectDropdownElementOnClickLogic,
		selectedElementOnClickLogic,
		selectedElementsArray,
		selectElementErrorMessage,
	};
};

export default useSearchAndSelect;
