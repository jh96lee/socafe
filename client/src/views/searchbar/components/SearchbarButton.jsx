import * as React from "react";

import { IconElement, DropdownMenu } from "../../shared";

import { useDropdown } from "../../../hooks/useDropdown";

import { SearchbarButtonStyle } from "../styles/SearchbarButtonStyle";

import { Search, Smile } from "../../../assets";

const SearchbarButton = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"searchbar-button-dropdown-trigger",
		"searchbar-button-dropdown-menu"
	);

	const searchbarButtonDropdownElementArray = [
		{
			type: "link",
			content: {
				icon: <Smile style={{ fill: "#000" }} />,
				label: "This button does nothing. It's just here for decoration",
			},
			onClickEventHandler: null,
		},
	];

	return (
		<SearchbarButtonStyle id="searchbar-button-dropdown-trigger">
			<IconElement
				iconRole="presentation"
				iconElementStyleObject={{
					iconSize: "1.5rem",
					iconColor: "#fff",
					iconHoverColor: {},
					elementBackgroundColor: "var(--primary-clickable-background-color)",
					elementHoverBackgroundColor:
						"var(--primary-hover-clickable-background-color)",
				}}
			>
				<Search />
			</IconElement>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-button-dropdown-menu"
					dropdownElementKey="searchbar-button-dropdown-element"
					dropdownElementArray={searchbarButtonDropdownElementArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 10px)",
						menuRight: "0",
					}}
				/>
			)}
		</SearchbarButtonStyle>
	);
};

export default SearchbarButton;
