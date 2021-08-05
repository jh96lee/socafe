import * as React from "react";
import { useHistory } from "react-router";

import { FormInput, DropdownMenu } from "../../shared";

import { useDropdown, useSearch } from "../../../hooks";

import { SearchbarInputStyle } from "../styles/SearchbarInputStyle";

const SearchbarInput = ({ searchType }) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"searchbar-input-dropdown-trigger",
		"searchbar-input-dropdown-menu"
	);

	const searchAPIEndpoint =
		searchType === "Users" ? "/search/users" : "/search/products";

	const { searchResultsArray, handleSearchResultsOnChange } = useSearch(
		searchAPIEndpoint,
		setIsDropdownMenuOpen
	);

	const history = useHistory();

	const dropdownElementsArray = searchResultsArray.map((result) => {
		return {
			content: result,
			onClickEventHandler: () => {
				history.push(
					`/${searchType === "Users" ? "user" : "product"}/${result.username}`
				);
			},
		};
	});

	return (
		<SearchbarInputStyle id="searchbar-input-dropdown-trigger">
			<FormInput
				id="search"
				name="search"
				type="text"
				label="Search"
				placeholder="Search"
				onChange={handleSearchResultsOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputPadding: "1.3rem 1rem",
					inputBoxShadow: "none",
					inputPlaceholderColor: "var(--text-1)",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-input-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 7px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				/>
			)}
		</SearchbarInputStyle>
	);
};

export default SearchbarInput;
