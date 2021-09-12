import * as React from "react";

import { DropdownMenu, Icon } from "../../shared";

import { useDropdown } from "../../../hooks";

import { SearchbarButtonStyle } from "../styles/SearchbarButtonStyle";

import { Search, Smile } from "../../../assets";

const SearchbarButton = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"searchbar-button-dropdown-trigger",
		"searchbar-button-dropdown-menu"
	);

	const dropdownElementsArray = [
		{
			icon: <Smile style={{ fill: "#000" }} />,
			text: "This button does nothing. It's just here for decoration",
			onClickEventHandler: () => {},
		},
	];

	return (
		<SearchbarButtonStyle id="searchbar-button-dropdown-trigger">
			<Icon
				iconRole="presentation"
				iconType="button"
				iconSize="1.8rem"
				iconFill="#fff"
				iconBGColor="var(--bg-button-default)"
				iconBGHoverColor="var(--bg-button-default-hover)"
			>
				<Search />
			</Icon>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-button-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 7px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				/>
			)}
		</SearchbarButtonStyle>
	);
};

export default SearchbarButton;
