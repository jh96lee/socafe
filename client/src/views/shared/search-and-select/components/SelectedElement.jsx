import * as React from "react";

import { CloseAlt } from "../../../../assets";

import { SelectedElementStyle } from "../styles/SelectedElementStyle";

const SelectedElement = ({ selectedElement, selectedElementOnClickLogic }) => {
	const { id } = selectedElement;

	const handleSelectedElementOnClick = () => {
		selectedElementOnClickLogic(id);
	};

	return (
		<SelectedElementStyle>
			{/* FIX: check for all available properties */}
			<p>{selectedElement.title || selectedElement.username}</p>

			<CloseAlt onClick={handleSelectedElementOnClick} />
		</SelectedElementStyle>
	);
};

export default SelectedElement;
