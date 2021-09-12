import * as React from "react";

import SearchbarType from "./SearchbarType";
import SearchbarInput from "./SearchbarInput";
import SearchbarButton from "./SearchbarButton";

import { BorderStyle } from "../../../styles";
import { SearchbarStyle } from "../styles/SearchbarStyle";

const Searchbar = ({
	isResponsiveSearchbarOpen,
	searchType,
	setSearchType,
}) => {
	return (
		<SearchbarStyle
			id="responsive-searchbar-dropdown"
			isResponsiveSearchbarOpen={isResponsiveSearchbarOpen}
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
	);
};

export default Searchbar;
