import * as React from "react";
import { useDispatch } from "react-redux";

const useSearchAndSelect = (
	maxContentsLength,
	contentType,
	setStateViaRedux,
	contentsArray,
	addContentAction,
	removeContentAction,
	setStateErrorMessageAction
) => {
	const dispatch = useDispatch();

	const [selectedContentsArray, setSelectedContentsArray] = React.useState([]);
	const [selectContentErrorMessage, setSelectContentErrorMessage] =
		React.useState(null);

	const contentsArrayState = setStateViaRedux
		? contentsArray
		: selectedContentsArray;

	const dropdownElementOnClickLogic = (selectedContent) => {
		const errorMessage = {};

		const exceededLimitErrorMessage = `You can select up to ${maxContentsLength} ${contentType}s`;
		const duplicateContentsErrorMessage = `Duplicate ${contentType}s cannot be selected`;

		if (contentsArrayState.length >= maxContentsLength) {
			errorMessage[contentType] = exceededLimitErrorMessage;

			setStateViaRedux
				? dispatch(setStateErrorMessageAction(errorMessage))
				: setSelectContentErrorMessage(errorMessage);

			return;
		}

		const contentIDsArray = contentsArrayState.map((content) => {
			return content.id;
		});

		if (contentIDsArray.includes(selectedContent.id)) {
			errorMessage[contentType] = duplicateContentsErrorMessage;

			setStateViaRedux
				? dispatch(setStateErrorMessageAction(errorMessage))
				: setSelectContentErrorMessage(errorMessage);

			return;
		}

		setStateViaRedux
			? dispatch(addContentAction(selectedContent))
			: setSelectedContentsArray((prevState) => [
					...prevState,
					selectedContent,
			  ]);

		setStateViaRedux
			? dispatch(setStateErrorMessageAction(null))
			: setSelectContentErrorMessage(null);
	};

	const selectedContentRemoveIconOnClickLogic = (contentID) => {
		setStateViaRedux
			? dispatch(setStateErrorMessageAction(null))
			: setSelectContentErrorMessage(null);

		setStateViaRedux
			? dispatch(removeContentAction(contentID))
			: setSelectedContentsArray((prevState) => {
					return prevState.filter((content) => {
						return content.id !== contentID;
					});
			  });
	};

	return {
		selectedContentsArray,
		selectContentErrorMessage,
		dropdownElementOnClickLogic,
		selectedContentRemoveIconOnClickLogic,
	};
};

export default useSearchAndSelect;
