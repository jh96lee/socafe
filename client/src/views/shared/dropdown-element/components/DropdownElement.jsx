import * as React from "react";

import {
	UserDropdownElement,
	CategoryDropdownElement,
	LinkDropdownElement,
} from "../index";

const DropdownElement = ({
	dropdownElementContent,
	dropdownElementType,
	dropdownElementOnClickEventHandler,
}) => {
	const dropdownElementObject = {
		user: (
			<UserDropdownElement
				dropdownElementContent={dropdownElementContent}
				dropdownElementOnClickEventHandler={dropdownElementOnClickEventHandler}
			/>
		),
		category: (
			<CategoryDropdownElement
				dropdownElementContent={dropdownElementContent}
				dropdownElementOnClickEventHandler={dropdownElementOnClickEventHandler}
			/>
		),
		link: (
			<LinkDropdownElement
				dropdownElementContent={dropdownElementContent}
				dropdownElementOnClickEventHandler={dropdownElementOnClickEventHandler}
			/>
		),
	};

	return dropdownElementObject[dropdownElementType];
};

export default DropdownElement;
