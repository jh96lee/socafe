import * as React from "react";
import { useHistory } from "react-router";

import { FormInput, DropdownMenu } from "../../shared";

import { useDropdown } from "../../../hooks/useDropdown";

import { handleSearchInputOnChange } from "../../../utils/form/handleSearchInputOnChange";

import { SearchbarInputStyle } from "../styles/SearchbarInputStyle";

const SearchbarInput = ({ searchType }) => {
	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"searchbar-input-dropdown-trigger",
		"searchbar-input-dropdown-menu"
	);

	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const history = useHistory();

	const handleOnChange = (e) => {
		setIsDropdownMenuOpen(true);

		const apiEndpoint =
			searchType === "Users" ? "/search/users" : "/search/products";

		handleSearchInputOnChange(e, apiEndpoint, setSearchResultArray);
	};

	const searchResultArrayCreator = () => {
		return searchResultArray.map((result) => {
			return {
				content: result,
				type: searchType === "Users" ? "user" : "product",
				onClickEventHandler: () => {
					history.push(
						`/${searchType === "Users" ? "user" : "product"}/${result.id}`
					);
				},
			};
		});
	};

	return (
		<SearchbarInputStyle id="searchbar-input-dropdown-trigger">
			<FormInput
				id="search"
				name="search"
				type="text"
				label="Search"
				placeholder="Search"
				onChange={handleOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputPadding: "1.3rem 1rem",
					inputBoxShadow: "none",
					inputPlaceholderColor: "var(--txt-1)",
				}}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-input-dropdown-menu"
					dropdownElementKey="searchbar-input-dropdown-element"
					dropdownElementArray={searchResultArrayCreator()}
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
