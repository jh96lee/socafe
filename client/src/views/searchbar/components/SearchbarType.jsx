import * as React from "react";

import { DropdownMenu } from "../../shared";

import { useDropdown } from "../../../hooks";

import { SearchbarTypeStyle } from "../styles/SearchbarTypeStyle";

import { capitalizeFirstLetter } from "../../../utils/common/capitalizeFirstLetter";

import { Down, StarFilled, UserFilled } from "../../../assets";

const SearchbarType = ({ searchType, setSearchType }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"searchbar-type-dropdown-trigger",
		"searchbar-type-dropdown-menu"
	);

	const dropdownElementsArray = React.useMemo(() => {
		return [
			{
				icon: <UserFilled />,
				text: "Users",
				onClickEventHandler: () => {
					setSearchType("users");
				},
			},
			{
				icon: <StarFilled />,
				text: "Topics",
				onClickEventHandler: () => {
					setSearchType("topics");
				},
			},
		];
	}, []);

	return (
		<SearchbarTypeStyle id="searchbar-type-dropdown-trigger">
			<p> {capitalizeFirstLetter(searchType)}</p>

			<Down />

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-type-dropdown-menu"
					dropdownElementType="icon"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 6px)",
						menuLeft: "0",
						menuWidth: "18rem",
					}}
				/>
			)}
		</SearchbarTypeStyle>
	);
};

export default SearchbarType;
