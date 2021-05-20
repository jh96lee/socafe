import * as React from "react";

import {
	LinkDropdownElementStyle,
	LinkDropdownElementIconStyle,
} from "../styles/LinkDropdownStyle";

const LinkDropdownElement = ({
	dropdownElementContent,
	dropdownElementOnClickEventHandler,
}) => {
	return (
		<LinkDropdownElementStyle onClick={dropdownElementOnClickEventHandler}>
			<LinkDropdownElementIconStyle>
				{dropdownElementContent.icon}
			</LinkDropdownElementIconStyle>

			<span>{dropdownElementContent.label}</span>
		</LinkDropdownElementStyle>
	);
};

export default LinkDropdownElement;
