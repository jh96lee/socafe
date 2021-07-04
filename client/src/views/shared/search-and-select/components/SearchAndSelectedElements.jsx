import * as React from "react";

import SelectedElement from "./SelectedElement";

import { SearchAndSelectedElementsStyle } from "../styles/SearchAndSelectedElementsStyle";

const SearchAndSelectedElements = ({
	searchAndSelectType,
	searchAndSelectedElementsArray,
	selectedElementOnClickLogic,
}) => {
	return (
		<SearchAndSelectedElementsStyle>
			{searchAndSelectedElementsArray.map((element, idx) => {
				return (
					<SelectedElement
						key={`${searchAndSelectType}__${idx}`}
						selectedElement={element}
						selectedElementOnClickLogic={selectedElementOnClickLogic}
					/>
				);
			})}
		</SearchAndSelectedElementsStyle>
	);
};

export default SearchAndSelectedElements;
