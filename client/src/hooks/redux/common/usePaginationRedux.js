import { useDispatch } from "react-redux";
import axios from "axios";

const usePagination = (
	defaultEndpoint,
	pageSize = 3,
	setStateIsInitialContentsLoadedAction,
	setStateIsExtraContentsLoadingAction,
	setStateInitialContentsAction,
	setStateExtraContentsAction,
	setStateNextAPIEndpointAction,
	setStateCurrentPageAction,
	nextAPIEndpointReduxState,
	additionalQueryString = null
) => {
	const dispatch = useDispatch();

	const fetchContents = async (isInitialFetch, method, data, headers) => {
		const url = "http://localhost:8080";

		if (isInitialFetch) {
			// REVIEW: status will change via payload instead of hard coded value
			dispatch(setStateIsInitialContentsLoadedAction(false));
		} else {
			dispatch(setStateIsExtraContentsLoadingAction(true));
		}

		const apiEndpoint = isInitialFetch
			? `${defaultEndpoint}?page=1&size=${pageSize}${
					additionalQueryString ? additionalQueryString : ""
			  }`
			: `${nextAPIEndpointReduxState}${
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
				dispatch(setStateInitialContentsAction(contents));
			} else {
				// REVIEW: contents setStating actions will determine if the content will get appended in the front or the back
				dispatch(setStateExtraContentsAction(contents));
			}

			dispatch(setStateNextAPIEndpointAction(next));
		}

		if (isInitialFetch) {
			setStateIsInitialContentsLoadedAction(true);
		} else {
			setStateIsExtraContentsLoadingAction(false);
		}
	};

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setStateCurrentPageAction());
	};

	return {
		fetchContents,
		handleLoadMoreButtonOnClick,
	};
};

export default usePagination;
