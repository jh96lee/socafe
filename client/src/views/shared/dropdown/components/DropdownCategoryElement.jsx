import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../../dropdown-element/styles/DropdownElementStyle";

const DropdownCategoryElement = ({
	dropdownElement,
	dropdownElementOnClickEventHandler,
}) => {
	const handleDropdownElementOnClick = () => {
		dropdownElementOnClickEventHandler(dropdownElement);
	};

	return (
		<DropdownElementStyle onClick={handleDropdownElementOnClick}>
			<img src={dropdownElement.category_url} alt="category" />

			<DropdownElementMetadataStyle>
				<p>{dropdownElement.title}</p>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default DropdownCategoryElement;
