import { useDispatch } from "react-redux";

const useSearchAndSelectRedux = (
	maxContentsLength,
	contentType,
	selectedContentsArray,
	addContentAction,
	removeContentAction,
	setStateErrorMessage
) => {
	const dispatch = useDispatch();

	const searchAndSelectDropdownElementOnClickLogic = (selectedElement) => {
		const maxSelectedContentsErrorMessage = `You can select up to ${maxContentsLength} ${contentType}`;
		const duplicateContentsErrorMessage = `Duplicate ${contentType} cannot be selected`;

		if (selectedContentsArray.length >= maxContentsLength) {
			dispatch(setStateErrorMessage(maxSelectedContentsErrorMessage));

			return;
		}

		const elementIDsArray = selectedContentsArray.map((element) => {
			return element.id;
		});

		if (elementIDsArray.includes(selectedElement.id)) {
			dispatch(setStateErrorMessage(duplicateContentsErrorMessage));

			return;
		}

		dispatch(addContentAction(selectedElement));
	};

	const selectedElementOnClickLogic = (elementID) => {
		dispatch(removeContentAction(elementID));
	};

	return {
		searchAndSelectDropdownElementOnClickLogic,
		selectedElementOnClickLogic,
	};
};

export default useSearchAndSelectRedux;
