import * as React from "react";

import SearchbarType from "./SearchbarType";
import SearchbarInput from "./SearchbarInput";
import SearchbarButton from "./SearchbarButton";
import { IconElement } from "../../shared";

import { useDropdown } from "../../../hooks/useDropdown";

import {
	SearchbarStyle,
	SearchbarWrapperStyle,
} from "../styles/SearchbarStyle";
import { BorderStyle } from "../../../styles";

import { Search } from "../../../assets";

const Searchbar = () => {
	const { isDropdownMenuOpen } = useDropdown(
		"responsive-searchbar-dropdown-trigger",
		"responsive-searchbar-dropdown",
		false
	);

	const [searchType, setSearchType] = React.useState("Filter");

	return (
		<SearchbarStyle id="responsive-searchbar-dropdown-trigger">
			<IconElement iconRole="button">
				<Search />
			</IconElement>

			<SearchbarWrapperStyle
				id="responsive-searchbar-dropdown"
				isDropdownMenuOpen={isDropdownMenuOpen}
			>
				<SearchbarType searchType={searchType} setSearchType={setSearchType} />

				<BorderStyle borderHeight="3.5rem" />

				<SearchbarInput searchType={searchType} />

				<BorderStyle borderHeight="3.5rem" />

				<SearchbarButton />
			</SearchbarWrapperStyle>
		</SearchbarStyle>
	);
};

export default Searchbar;
