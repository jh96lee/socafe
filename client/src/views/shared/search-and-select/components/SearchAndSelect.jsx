import * as React from "react";

import { FormInput } from "../..";
import SearchAndSelectedElements from "./SearchAndSelectedElements";
import DropdownMenu from "../../dropdown/components/DropdownMenu";

import { useSearch, useDropdown } from "../../../../hooks";

import { dropdownElementTypeIdentifier } from "../../../../utils/dropdownElementTypeIdentifier";

import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectedElementsArray,
	searchAndSelectInputPlaceholder,
	searchAndSelectInputAPIEndpoint,
	selectedElementOnClickLogic,
	searchAndSelectDropdownElementOnClickLogic,
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
				selectedElementOnClickLogic={selectedElementOnClickLogic}
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
					dropdownElementOnClickEventLogic={
						searchAndSelectDropdownElementOnClickLogic
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
