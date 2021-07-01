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
		<DropdownElementStyle
			onClick={dropdownElementOnClickEventHandler}
			data-value={dropdownElementContent.title.toLowerCase()}
		>
			<img src={dropdownElementContent.category_url} alt="category" />

			<DropdownElementMetadataStyle>
				<p>{dropdownElementContent.title}</p>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default CategoryDropdownElement;
