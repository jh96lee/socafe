import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../styles/DropdownElementStyle";

const UserDropdownElement = ({
	dropdownElementContent,
	dropdownElementOnClickEventHandler,
}) => {
	return (
		<DropdownElementStyle onClick={dropdownElementOnClickEventHandler}>
			<img src={dropdownElementContent.avatar_url} />

			<DropdownElementMetadataStyle>
				<p>@{dropdownElementContent.username}</p>

				<span>{dropdownElementContent.full_name}</span>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default UserDropdownElement;
