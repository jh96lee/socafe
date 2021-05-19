import axios from "axios";

export const searchRequest = async (
	searchInput,
	apiEndpoint,
	setSearchResultArray
) => {
	const { data } = await axios({
		method: "POST",
		url: `http://localhost:8080${apiEndpoint}`,
		data: {
			searchInput: searchInput ? searchInput : null,
		},
	});

	setSearchResultArray(data);
};
