import * as React from "react";

import SearchbarType from "./SearchbarType";
import SearchbarInput from "./SearchbarInput";
import SearchbarButton from "./SearchbarButton";

import { SearchbarStyle } from "../styles/SearchbarStyle";
import { BorderStyle } from "../../../styles";

const Searchbar = () => {
	const [searchType, setSearchType] = React.useState("Filter");

	return (
		<SearchbarStyle>
			<SearchbarType searchType={searchType} setSearchType={setSearchType} />

			<BorderStyle borderHeight="3.5rem" />

			<SearchbarInput searchType={searchType} />

			<BorderStyle borderHeight="3.5rem" />

			<SearchbarButton />
		</SearchbarStyle>
	);
};

export default Searchbar;
