import * as React from "react";

import { DropdownElementStyle } from "../styles/DropdownElementStyle";
import { DropdownElementMetadataStyle } from "../styles/DropdownElementMetadataStyle";

const DropdownUserElement = ({
	dropdownElement,
	dropdownElementOnClickEventLogic,
}) => {
	const handleDropdownElementOnClick = () => {
		dropdownElementOnClickEventLogic(dropdownElement);
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
