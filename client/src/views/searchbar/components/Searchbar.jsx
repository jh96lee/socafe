import * as React from "react";

import SearchbarType from "./SearchbarType";
import SearchbarInput from "./SearchbarInput";
import SearchbarButton from "./SearchbarButton";
import { IconElement } from "../../shared";

import { useDropdown } from "../../../hooks";

import { BorderStyle } from "../../../styles";
import { SearchbarStyle } from "../styles/SearchbarStyle";
import { SearchbarResponsiveStyle } from "../styles/SearchbarResponsiveStyle";

import { Search } from "../../../assets";

const Searchbar = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"responsive-searchbar-dropdown-trigger",
		"responsive-searchbar-dropdown",
		false
	);

	const [searchType, setSearchType] = React.useState("Filter");

	return (
		<SearchbarResponsiveStyle id="responsive-searchbar-dropdown-trigger">
			<IconElement iconRole="button" iconID="searchbar__search-icon">
				<Search />
			</IconElement>

			<SearchbarStyle
				id="responsive-searchbar-dropdown"
				isResponsiveSearchbarOpen={isDropdownMenuOpen}
			>
				<SearchbarType searchType={searchType} setSearchType={setSearchType} />

				<BorderStyle
					borderHeight="3.5rem"
					borderWidth="0"
					boxShadowWidth="0.8px"
				/>

				<SearchbarInput searchType={searchType} />

				<BorderStyle
					borderHeight="3.5rem"
					borderWidth="0"
					boxShadowWidth="0.8px"
				/>

				<SearchbarButton />
			</SearchbarStyle>
		</SearchbarResponsiveStyle>
	);
};

export default Searchbar;
