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
					iconSize: "1.8rem",
					iconResponsiveSize: "1.8rem",
					iconColor: "#fff",
					iconHoverColor: {},
					elementPadding: "0.6rem",
					elementBackgroundColor: "var(--bg-clickable-1)",
					elementHoverBackgroundColor: "var(--bg-clickable-hover-1)",
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
						menuTop: "calc(100% + 7px)",
						menuRight: "0",
					}}
				/>
			)}
		</SearchbarButtonStyle>
	);
};

export default SearchbarButton;
