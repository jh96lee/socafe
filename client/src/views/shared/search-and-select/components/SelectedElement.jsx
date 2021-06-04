import * as React from "react";
import { useDispatch } from "react-redux";

import { removeContent } from "../../../../redux/common/removeContent";

import { SelectedElementStyle } from "../styles/SelectedElementStyle";

import { Remove } from "../../../../assets";

// REVIEW: this component has only 1 job and that is filtering the selected element/value off of the corresponding array
const SelectedElement = ({ selectedContent, searchAndSelectType }) => {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		// REVIEW: this is all it needs to do
		dispatch(removeContent(searchAndSelectType, selectedContent.id));
	};

	return (
		<SelectedElementStyle>
			<p>{selectedContent.title || selectedContent.username}</p>

			<Remove onClick={handleOnClick} />
		</SelectedElementStyle>
	);
};

export default SelectedElement;
