import * as React from "react";
import axios from "axios";

export const useSearch = (searchAPIEndpoint, setIsDropdownMenuOpen) => {
	const [searchResultsArray, setSearchResultsArray] = React.useState([]);

	const handleSearchResultsOnChange = async (e) => {
		setIsDropdownMenuOpen(true);

		const { data } = await axios({
			method: "POST",
			url: `http://localhost:8080${searchAPIEndpoint}`,
			data: {
				searchInput: e.target.value ? e.target.value.toLowerCase() : null,
			},
		});

		setSearchResultsArray(data);
	};

	return {
		searchResultsArray,
		setSearchResultsArray,
		handleSearchResultsOnChange,
	};
};
