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

	const handleOnClick = (e) => {
		setSearchType(e.currentTarget.dataset.value);
	};

	const searchbarTypeDropdownElementArray = React.useMemo(() => {
		return [
			{
				content: {
					label: "Users",
					icon: <Users />,
				},
				type: "link",
				onClickEventHandler: handleOnClick,
			},
			{
				content: { label: "Products", icon: <Product /> },
				type: "link",
				onClickEventHandler: handleOnClick,
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
					dropdownElementKey="searchbar-type-dropdown-element"
					dropdownElementArray={searchbarTypeDropdownElementArray}
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
