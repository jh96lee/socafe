import * as React from "react";

const useSearchAndSelectReact = (maxContentsLength, contentType) => {
	const [selectedContentsArray, setSelectedContentsArray] = React.useState([]);
	const [selectContentErrorMessage, setSelectContentErrorMessage] =
		React.useState(null);

	const searchAndSelectDropdownElementOnClickEventHandler = (
		selectedElement
	) => {
		const maxSelectedContentsErrorMessage = `You can select up to ${maxContentsLength} ${contentType}`;
		const duplicateContentsErrorMessage = `Duplicate ${contentType} cannot be selected`;

		if (selectedContentsArray.length >= maxContentsLength) {
			setSelectContentErrorMessage(maxSelectedContentsErrorMessage);

			return;
		}

		const elementIDsArray = selectedContentsArray.map((element) => {
			return element.id;
		});

		if (elementIDsArray.includes(selectedElement.id)) {
			setSelectContentErrorMessage(duplicateContentsErrorMessage);

			return;
		}

		setSelectedContentsArray((prevState) => [...prevState, selectedElement]);

		setSelectContentErrorMessage(null);
	};

	const selectedElementOnClickEventHandler = (elementID) => {
		setSelectContentErrorMessage(null);

		setSelectedContentsArray((prevState) => {
			return prevState.filter((element) => {
				return element.id !== elementID;
			});
		});
	};

	return {
		searchAndSelectDropdownElementOnClickEventHandler,
		selectedElementOnClickEventHandler,
		selectedContentsArray,
		selectContentErrorMessage,
	};
};

export default useSearchAndSelectReact;
