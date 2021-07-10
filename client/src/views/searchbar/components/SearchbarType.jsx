import * as React from "react";

import { DropdownMenu } from "../../shared";

import { useDropdown } from "../../../hooks";

import { SearchbarTypeStyle } from "../styles/SearchbarType";

import { Down, Users, Product } from "../../../assets";

const SearchbarType = ({ searchType, setSearchType }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"searchbar-type-dropdown-trigger",
		"searchbar-type-dropdown-menu"
	);

	const dropdownElementsArray = React.useMemo(() => {
		return [
			{
				content: {
					label: "Users",
					icon: <Users data-search-type="user" />,
				},
				onClickEventHandler: () => {
					setSearchType("Users");
				},
			},
			{
				content: {
					label: "Products",
					icon: <Product data-search-type="product" />,
				},
				onClickEventHandler: () => {
					setSearchType("Products");
				},
			},
		];
	}, []);

	return (
		<SearchbarTypeStyle id="searchbar-type-dropdown-trigger">
			<p> {searchType}</p>

			<Down />

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-type-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 7px)",
						menuLeft: "0",
					}}
				/>
			)}
		</SearchbarTypeStyle>
	);
};

export default SearchbarType;
