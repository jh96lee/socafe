import * as React from "react";

import axios from "axios";

const usePaginationReact = (
	defaultEndpoint,
	pageSize = 3,
	// REVIEW: true for things like loading up replies (you want the older comments to appear at the top)
	isExtraContentAppendedInFront,
	additionalQueryString = null
) => {
	const [contents, setContents] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [nextAPIEndpoint, setNextAPIEndpoint] = React.useState("");
	const [isInitialContentsLoaded, setIsInitialContentsLoaded] =
		React.useState(false);
	const [isExtraContentsLoading, setIsExtraContentsLoading] =
		React.useState(false);

	const size = pageSize;

	const fetchContents = async (isInitialFetch, method, data, headers) => {
		const url = "http://localhost:8080";

		if (isInitialFetch) {
			setIsInitialContentsLoaded(false);
		} else {
			setIsExtraContentsLoading(true);
		}

		const apiEndpoint = isInitialFetch
			? `${defaultEndpoint}?page=1&size=${size}${
					additionalQueryString ? additionalQueryString : ""
			  }`
			: `${nextAPIEndpoint}${
					additionalQueryString ? additionalQueryString : ""
			  }`;

		const result = await axios({
			method,
			url: `${url}${apiEndpoint}`,
			data,
			headers,
		});

		const { error } = result.data;

		if (!error) {
			const { contents, next } = result.data;

			if (isInitialFetch) {
				setContents(contents);
			} else {
				isExtraContentAppendedInFront
					? setContents((prevState) => [...contents, ...prevState])
					: setContents((prevState) => [...prevState, ...contents]);
			}

			setNextAPIEndpoint(next);
		}

		if (isInitialFetch) {
			setIsInitialContentsLoaded(true);
		} else {
			setIsExtraContentsLoading(false);
		}
	};

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return {
		contents,
		setContents,
		currentPage,
		setCurrentPage,
		nextAPIEndpoint,
		isInitialContentsLoaded,
		isExtraContentsLoading,
		fetchContents,
		handleLoadMoreButtonOnClick,
	};
};

export default usePaginationReact;
