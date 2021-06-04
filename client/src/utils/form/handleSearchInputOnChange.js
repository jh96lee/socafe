import axios from "axios";

export const handleSearchInputOnChange = async (
	e,
	apiEndpoint,
	setSearchResultArray
) => {
	const { data } = await axios({
		method: "POST",
		url: `http://localhost:8080${apiEndpoint}`,
		data: {
			searchInput: e.target.value ? e.target.value : null,
		},
	});

	console.log(data);
	setSearchResultArray(data);
};
