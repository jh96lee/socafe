import * as React from "react";

import { Icon } from "../..";

import { SelectedContentStyle } from "../styles/SelectedContentStyle";

import { Remove } from "../../../../assets";

const SelectedContent = ({ content, selectedContentKey, removeContent }) => {
	const { id } = content;

	const handleRemoveIconOnClick = () => {
		removeContent(id);
	};

	return (
		<SelectedContentStyle>
			<p>{content[selectedContentKey]}</p>

			<Icon
				iconRole="button"
				iconType="overlay"
				iconSize="1.5rem"
				iconPadding="0.3rem"
				iconBGColor="none"
				iconFill="var(--char-blue-1)"
				iconOnClick={handleRemoveIconOnClick}
			>
				<Remove />
			</Icon>
		</SelectedContentStyle>
	);
};

export default SelectedContent;
