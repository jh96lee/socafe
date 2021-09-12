import * as React from "react";

import { Icon } from "../../shared";
import Searchbar from "./Searchbar";

import { useDropdown } from "../../../hooks";

import { SearchbarResponsiveStyle } from "../styles/SearchbarResponsiveStyle";

import { Search } from "../../../assets";

const ResponsiveSearchbar = () => {
	const [searchType, setSearchType] = React.useState("users");

	const { isDropdownMenuOpen } = useDropdown(
		"responsive-searchbar-dropdown-trigger",
		"responsive-searchbar-dropdown",
		false
	);

	return (
		<SearchbarResponsiveStyle id="responsive-searchbar-dropdown-trigger">
			<Icon
				iconID="searchbar__search-icon"
				iconRole="button"
				iconPadding="0.8rem"
			>
				<Search />
			</Icon>

			<Searchbar
				isResponsiveSearchbarOpen={isDropdownMenuOpen}
				searchType={searchType}
				setSearchType={setSearchType}
			/>
		</SearchbarResponsiveStyle>
	);
};

export default ResponsiveSearchbar;
