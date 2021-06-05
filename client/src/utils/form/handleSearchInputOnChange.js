import axios from "axios";

export const handleSearchInputOnChange = async (
	e,
	apiEndpoint,
	setSearchResultArray,
	setIsDropdownMenuOpen
) => {
	setIsDropdownMenuOpen(true);

	const { data } = await axios({
		method: "POST",
		url: `http://localhost:8080${apiEndpoint}`,
		data: {
			searchInput: e.target.value ? e.target.value : null,
		},
	});

	setSearchResultArray(data);
};
