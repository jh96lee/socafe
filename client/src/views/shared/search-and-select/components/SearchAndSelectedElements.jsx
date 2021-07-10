import * as React from "react";

import SelectedElement from "./SelectedElement";

import { SearchAndSelectedElementsStyle } from "../styles/SearchAndSelectedElementsStyle";

const SearchAndSelectedElements = ({
	searchAndSelectType,
	searchAndSelectedElementsArray,
	selectedElementOnClickEventHandler,
}) => {
	return (
		<SearchAndSelectedElementsStyle>
			{searchAndSelectedElementsArray.map((element, idx) => {
				return (
					<SelectedElement
						key={`${searchAndSelectType}__${idx}`}
						selectedElement={element}
						selectedElementOnClickEventHandler={
							selectedElementOnClickEventHandler
						}
					/>
				);
			})}
		</SearchAndSelectedElementsStyle>
	);
};

export default SearchAndSelectedElements;
