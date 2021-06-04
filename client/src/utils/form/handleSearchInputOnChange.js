import axios from "axios";

export const handleSearchInputOnChange = async (
	event,
	apiEndpoint,
	setSearchResultArray
) => {
	const { data } = await axios({
		method: "POST",
		url: `http://localhost:8080${apiEndpoint}`,
		data: {
			searchInput: event.target.value ? event.target.value : null,
		},
	});

	setSearchResultArray(data);
};
