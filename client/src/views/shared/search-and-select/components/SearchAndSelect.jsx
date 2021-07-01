import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu, FormInput } from "../../index";
import SearchAndSelected from "./SearchAndSelected";

import { addContent } from "../../../../redux/common/addContent";

import { useDropdown } from "../../../../hooks/useDropdown";
import { useSearch } from "../../../../hooks/useSearch";

import { dropdownElementTypeIdentifier } from "../../../../utils/dropdownElementTypeIdentifier";

import { SearchAndSelectStyle } from "../styles/SearchAndSelectStyle";

const SearchAndSelect = ({
	searchAndSelectType,
	searchAndSelectAPIEndpoint,
	searchAndSelectedArray,
	addContentAction,
	removeContentAction,
}) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		`search-and-select-${searchAndSelectType}-dropdown-trigger`,
		`search-and-select-${searchAndSelectType}-dropdown-menu`
	);

	const { searchResultsArray, handleSearchResultsOnChange } = useSearch(
		searchAndSelectAPIEndpoint,
		setIsDropdownMenuOpen
	);

	const dispatch = useDispatch();

	const dropdownElementArray = searchResultsArray.map((result) => {
		return {
			type: dropdownElementTypeIdentifier(searchAndSelectType),
			content: result,
			onClickEventHandler: () => {
				dispatch(addContentAction(result));
			},
		};
	});

	console.log(searchResultsArray);

	return (
		<SearchAndSelectStyle
			id={`search-and-select-${searchAndSelectType}-dropdown-trigger`}
		>
			{/* <SearchAndSelected searchAndSelectedArray={searchAndSelectedArray} /> */}

			<FormInput
				id={`search-and-select-${searchAndSelectType}`}
				name={`search-and-select-${searchAndSelectType}-input`}
				type="text"
				label={`search and select-${searchAndSelectType}`}
				placeholder="Search categories for your post"
				// onChange={(e) => handleSearchResultsOnChange(e)}
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
					dropdownElementKey={`search-and-select-${searchAndSelectType}-dropdown-element`}
					dropdownElementArray={dropdownElementArray}
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
