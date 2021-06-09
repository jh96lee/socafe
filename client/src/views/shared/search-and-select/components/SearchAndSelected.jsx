import * as React from "react";

import SelectedElement from "./SelectedElement";

import { SearchAndSelectedStyle } from "../styles/SearchAndSelectedStyle";

const SearchAndSelected = ({
	searchAndSelectType,
	searchAndSelectedArray,
	removeContentActionCreator,
	searchAndSelectedStyleObject,
}) => {
	return (
		<SearchAndSelectedStyle {...searchAndSelectedStyleObject}>
			{searchAndSelectedArray.map((content, idx) => {
				return (
					<SelectedElement
						key={`search-and-select-${searchAndSelectType}__${idx}`}
						selectedContent={content}
						removeContentActionCreator={removeContentActionCreator}
					/>
				);
			})}
		</SearchAndSelectedStyle>
	);
};

export default SearchAndSelected;
