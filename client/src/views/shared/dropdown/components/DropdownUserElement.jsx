import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../../dropdown-element/styles/DropdownElementStyle";

const DropdownUserElement = ({
	dropdownElement,
	dropdownElementOnClickEventHandler,
}) => {
	const handleDropdownElementOnClick = () => {
		dropdownElementOnClickEventHandler(dropdownElement);
	};

	return (
		<DropdownElementStyle onClick={handleDropdownElementOnClick}>
			<img src={dropdownElement.avatar_url} alt="user avatar" />

			<DropdownElementMetadataStyle>
				<p>@{dropdownElement.username}</p>

				<span>{dropdownElement.full_name}</span>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default DropdownUserElement;
