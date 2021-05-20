import * as React from "react";

import UserDropdownElement from "./UserDropdownElement";
import CategoryDropdownElement from "./CategoryDropdownElement";
import LinkDropdownElement from "./LinkDropdownElement";

const DropdownElement = ({
	// REVIEW: individual elements to render on DropdownMenu
	dropdownElementContent,
	// REVIEW: type of DropdownElement component to render
	dropdownElementComponentType,
	// REVIEW: onClick event
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

	return dropdownElementObject[dropdownElementComponentType];
};

export default DropdownElement;
