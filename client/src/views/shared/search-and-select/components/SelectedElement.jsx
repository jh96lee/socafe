import * as React from "react";
import { useDispatch } from "react-redux";

import { SelectedElementStyle } from "../styles/SelectedElementStyle";

import { Remove } from "../../../../assets";

// REVIEW: this component has only 1 job and that is filtering the selected element/value off of the corresponding array
const SelectedElement = ({
	selectedContent,
	removeContentActionCreator,
	selectedElementSTyleObject,
}) => {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		// REVIEW: this is all it needs to do
		dispatch(removeContentActionCreator(selectedContent.id));
	};

	return (
		<SelectedElementStyle {...selectedElementSTyleObject}>
			<p>{selectedContent.title || selectedContent.username}</p>

			<Remove onClick={handleOnClick} />
		</SelectedElementStyle>
	);
};

export default SelectedElement;
