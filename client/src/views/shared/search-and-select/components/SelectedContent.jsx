import * as React from "react";

import { CloseAlt } from "../../../../assets";

import { SelectedContentStyle } from "../styles/SelectedContentStyle";

const SelectedContent = ({
	selectedContent,
	selectedContentRemoveIconOnClickLogic,
}) => {
	const { id } = selectedContent;

	const handleSelectedContentRemoveIconOnClick = () => {
		selectedContentRemoveIconOnClickLogic(id);
	};

	return (
		<SelectedContentStyle>
			<p>{selectedContent.title || selectedContent.username}</p>

			<CloseAlt onClick={handleSelectedContentRemoveIconOnClick} />
		</SelectedContentStyle>
	);
};

export default SelectedContent;
