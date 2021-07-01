import * as React from "react";
import styled from "styled-components";

import SelectedElement from "./SelectedElement";

const SearchAndSelectedElementsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: ${(props) => props.searchAndSelectedPadding || "1.5rem"};
	position: relative;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	background-color: transparent;

	&:empty {
		display: none;
	}
`;

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
