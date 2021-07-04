import * as React from "react";

import { DropdownElementStyle } from "../styles/DropdownElementStyle";
import { DropdownElementMetadataStyle } from "../styles/DropdownElementMetadataStyle";

const DropdownCategoryElement = ({
	dropdownElement,
	dropdownElementOnClickEventLogic,
}) => {
	const handleDropdownElementOnClick = () => {
		dropdownElementOnClickEventLogic(dropdownElement);
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
