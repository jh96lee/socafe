import * as React from "react";

import {
	DropdownElementStyle,
	DropdownElementMetadataStyle,
} from "../styles/DropdownElementStyle";

const CategoryDropdownElement = ({ content, onClickEventHandler }) => {
	return (
		<DropdownElementStyle onClick={onClickEventHandler}>
			<img src={content.category_url} />

			<DropdownElementMetadataStyle>
				<p>{content.title}</p>
			</DropdownElementMetadataStyle>
		</DropdownElementStyle>
	);
};

export default CategoryDropdownElement;
