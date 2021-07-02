import * as React from "react";

import { Remove } from "../../../../assets";

import { SelectedElementStyle } from "../styles/SelectedElementStyle";

const SelectedElement = ({
	selectedElement,
	selectedElementOnClickEventHandler,
}) => {
	const { id } = selectedElement;

	const handleSelectedElementOnClick = () => {
		selectedElementOnClickEventHandler(id);
	};

	return (
		<SelectedElementStyle>
			{/* FIX: check for all available properties */}
			<p>{selectedElement.title || selectedElement.username}</p>

			<Remove onClick={handleSelectedElementOnClick} />
		</SelectedElementStyle>
	);
};

export default SelectedElement;
