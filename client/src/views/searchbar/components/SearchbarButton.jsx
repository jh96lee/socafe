import * as React from "react";

import { IconElement, DropdownMenu } from "../../shared";

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
			content: {
				icon: <Smile style={{ fill: "#000" }} />,
				label: "This button does nothing. It's just here for decoration",
			},
			onClickEventHandler: () => {},
		},
	];

	return (
		<SearchbarButtonStyle id="searchbar-button-dropdown-trigger">
			<IconElement
				iconRole="presentation"
				iconElementStyleObject={{
					iconSize: "1.8rem",
					iconColor: "#fff",
					elementPadding: "0.6rem",
					elementBackgroundColor: "var(--button-default-bg-color)",
					elementHoverBackgroundColor: "var(--button-default-hover-bg-color)",
				}}
			>
				<Search />
			</IconElement>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="searchbar-button-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
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
