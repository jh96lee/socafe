import * as React from "react";
import { useSelector } from "react-redux";

import StorySidebarUser from "./StorySidebarUser";
import { Loader } from "../../shared";

import {
	fetchedHomeFeedStoriesArray,
	fetchedExtraHomeFeedStoriesArray,
	setHomeFeedStoriesNextAPIEndpoint,
} from "../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { StorySidebarUsersStyle } from "../styles/StorySidebarUsersStyle";

const StorySidebarUsers = () => {
	const {
		homeFeedStoriesArray,
		homeFeedStoriesErrorMessage,
		homeFeedStoriesNextAPIEndpoint,
	} = useSelector((state) => state.homeFeedStoriesReducer);

	const { currentPage, setCurrentPage, isExtraContentsLoading, fetchContents } =
		usePagination(
			"/story/feed",
			2,
			false,
			true,
			fetchedHomeFeedStoriesArray,
			fetchedExtraHomeFeedStoriesArray,
			setHomeFeedStoriesNextAPIEndpoint,
			homeFeedStoriesNextAPIEndpoint
		);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (homeFeedStoriesArray && afterInitialMount.current) {
			const token = fetchToken();

			fetchContents(false, "GET", null, {
				Authorization: `Bearer ${token}`,
			});
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<StorySidebarUsersStyle>
			{homeFeedStoriesArray && !homeFeedStoriesErrorMessage ? (
				homeFeedStoriesArray.map(({ storyOwner }, idx) => {
					return (
						<StorySidebarUser storyOwner={storyOwner} storyUserIdx={idx} />
					);
				})
			) : (
				<h1>
					{homeFeedStoriesErrorMessage && homeFeedStoriesErrorMessage.story}
				</h1>
			)}

			{homeFeedStoriesNextAPIEndpoint === null ||
			!homeFeedStoriesArray ||
			(homeFeedStoriesArray && homeFeedStoriesNextAPIEndpoint === "") ? null : (
				<button onClick={handleLoadMoreButtonOnClick}>
					{isExtraContentsLoading ? (
						<Loader
							isLoaderAbsolute={false}
							loaderSize="2.4rem"
							loaderBorderSize="0.4rem"
						/>
					) : (
						"Load More"
					)}
				</button>
			)}
		</StorySidebarUsersStyle>
	);
};

export default StorySidebarUsers;
