import * as React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const usePagination = (
	defaultEndpoint,
	pageSize = 3,
	setStateViaRedux = false,
	setStateInitialContentsAction = null,
	setStateExtraContentsAction = null,
	isExtraContentAppendedAtTheBottom
) => {
	const dispatch = useDispatch();

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
			? `${defaultEndpoint}?page=1&size=${size}`
			: nextAPIEndpoint;

		const result = await axios({
			method,
			url: `${url}${apiEndpoint}`,
			data,
			headers,
		});

		const { error } = result.data;

		console.log(result.data);

		if (!error) {
			const { contents, next } = result.data;

			if (isInitialFetch) {
				setStateViaRedux
					? dispatch(setStateInitialContentsAction(contents))
					: setContents(contents);
			} else {
				setStateViaRedux
					? dispatch(setStateExtraContentsAction(contents))
					: isExtraContentAppendedAtTheBottom
					? setContents((prevState) => [...prevState, ...contents])
					: setContents((prevState) => [...contents, ...prevState]);
			}

			setNextAPIEndpoint(next);
		}

		if (isInitialFetch) {
			setIsInitialContentsLoaded(true);
		} else {
			setIsExtraContentsLoading(false);
		}
	};

	const loadMoreButtonOnClickLogic = () => {
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
		loadMoreButtonOnClickLogic,
	};
};

export default usePagination;
