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

			<p>{dropdownElementContent.label}</p>
		</LinkDropdownElementStyle>
	);
};

export default LinkDropdownElement;
