import * as React from "react";
import axios from "axios";

import { SearchInputStyle } from "./SearchInputStyle";

const SearchInput = ({
	setSearchResultArray,
	searchAPIEndpoint,
	searchInputPlaceholder,
}) => {
	const handleOnChange = async (e) => {
		const { data } = await axios({
			method: "POST",
			url: `http://localhost:8080${searchAPIEndpoint}`,
			data: {
				searchInput: e.target.value ? e.target.value : null,
			},
		});

		setSearchResultArray(data);
	};

	return (
		<SearchInputStyle
			onChange={handleOnChange}
			placeholder={searchInputPlaceholder}
		/>
	);
};

export default SearchInput;
