import * as React from "react";
import styled from "styled-components";

import { FormInput } from "../../shared";
import SearchAndSelectedElements from "./SearchAndSelectedElements";
import DropdownMenu from "../../shared/dropdown/components/DropdownMenu";

import { useSearch } from "../../../hooks/useSearch";
import { useDropdown } from "../../../hooks/useDropdown";

import { dropdownElementTypeIdentifier } from "../../../utils/dropdownElementTypeIdentifier";

const SearchAndSelectStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0 0 1.6px var(--separator-1);
	background-color: var(--bg-2);
`;

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectedElementsArray,
	searchAndSelectInputPlaceholder,
	searchAndSelectInputAPIEndpoint,
	selectedElementOnClickEventHandler,
	dropdownElementOnClickEventHandler,
}) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		`search-and-select-${searchAndSelectType}-dropdown-trigger`,
		`search-and-select-${searchAndSelectType}-dropdown-menu`
	);

	const { searchResultsArray, handleSearchResultsOnChange } = useSearch(
		searchAndSelectInputAPIEndpoint,
		setIsDropdownMenuOpen
	);

	return (
		<SearchAndSelectStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			<SearchAndSelectedElements
				searchAndSelectType={searchAndSelectType}
				searchAndSelectedElementsArray={searchAndSelectedElementsArray}
				selectedElementOnClickEventHandler={selectedElementOnClickEventHandler}
			/>

			<FormInput
				id={searchAndSelectType}
				name={searchAndSelectType}
				type="text"
				label={searchAndSelectType}
				placeholder={searchAndSelectInputPlaceholder}
				onChange={handleSearchResultsOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputBoxShadow: "none",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID={`search-and-select-${searchAndSelectType}-dropdown-menu`}
					dropdownElementsArray={searchResultsArray}
					dropdownElementType={dropdownElementTypeIdentifier(
						searchAndSelectType
					)}
					dropdownElementOnClickEventHandler={
						dropdownElementOnClickEventHandler
					}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 6px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				/>
			)}
		</SearchAndSelectStyle>
	);
};

export default SearchAndSelect;
