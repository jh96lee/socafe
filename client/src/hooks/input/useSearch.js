import * as React from "react";
import axios from "axios";

const useSearch = (searchAPIEndpoint, setIsDropdownMenuOpen, pageSize = 2) => {
	const [page, setPage] = React.useState(1);
	const [searchResultsArray, setSearchResultsArray] = React.useState([]);

	const size = pageSize;

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

export default useSearch;
