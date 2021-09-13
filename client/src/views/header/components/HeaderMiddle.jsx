import * as React from "react";

import { Icon } from "../../shared";
import { Searchbar } from "../../searchbar";

import { useDropdown } from "../../../hooks";

import { HeaderMiddleStyle } from "../styles/HeaderMiddleStyle";

import { Search } from "../../../assets";

const HeaderMiddle = () => {
	const [searchType, setSearchType] = React.useState("users");

	const { isDropdownMenuOpen } = useDropdown(
		"responsive-searchbar-dropdown-trigger",
		"responsive-searchbar-dropdown",
		false
	);

	return (
		<HeaderMiddleStyle id="responsive-searchbar-dropdown-trigger">
			<Icon
				iconID="searchbar__search-icon"
				iconRole="button"
				iconDimension="3.7rem"
				iconPadding="0rem"
			>
				<Search />
			</Icon>

			<Searchbar
				isResponsiveSearchbarOpen={isDropdownMenuOpen}
				searchType={searchType}
				setSearchType={setSearchType}
			/>
		</HeaderMiddleStyle>
	);
};

export default HeaderMiddle;
