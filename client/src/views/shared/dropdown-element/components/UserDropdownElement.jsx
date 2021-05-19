import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../styles/DropdownElementStyle";

const UserDropdownElement = ({ content, onClickEventHandler }) => {
	return (
		<DropdownElementStyle onClick={onClickEventHandler}>
			<img src={content.avatar_url} />

			<DropdownElementMetadataStyle>
				<p>@{content.username}</p>

				<span>{content.full_name}</span>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default UserDropdownElement;
