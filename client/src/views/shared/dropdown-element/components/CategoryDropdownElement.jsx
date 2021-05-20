import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../styles/DropdownElementStyle";

const CategoryDropdownElement = ({
	dropdownElementContent,
	dropdownElementOnClickEventHandler,
}) => {
	return (
		<DropdownElementStyle onClick={dropdownElementOnClickEventHandler}>
			<img src={dropdownElementContent.category_url} />

			<DropdownElementMetadataStyle>
				<p>{dropdownElementContent.title}</p>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default CategoryDropdownElement;
