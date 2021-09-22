import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import StorySidebarUser from "./StorySidebarUser";
import { Loader } from "../../shared";

import {
	fetchExtraHomeFeedStories,
	setHomeFeedStoriesPage,
} from "../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

import { Down } from "../../../assets";

import { StorySidebarUsersStyle } from "../styles/StorySidebarUsersStyle";

const StorySidebarUsers = () => {
	const dispatch = useDispatch();

	const {
		currentHomeFeedStoriesPage,
		isHomeFeedStoriesLoaded,
		isExtraHomeFeedStoriesLoading,
		homeFeedStories,
		homeFeedStoriesNextAPIEndpoint,
	} = useSelector((state) => state.homeFeedStoriesReducer);

	React.useEffect(() => {
		if (currentHomeFeedStoriesPage > 1) {
			dispatch(fetchExtraHomeFeedStories(homeFeedStoriesNextAPIEndpoint));
		}
	}, [currentHomeFeedStoriesPage]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setHomeFeedStoriesPage());
	};

	return (
		<StorySidebarUsersStyle>
			{homeFeedStories.map(({ storyOwner }, idx) => {
				return <StorySidebarUser storyOwner={storyOwner} storyUserIdx={idx} />;
			})}

			{homeFeedStoriesNextAPIEndpoint === null ||
			!homeFeedStories ||
			(homeFeedStories && homeFeedStoriesNextAPIEndpoint === "") ? null : (
				<button onClick={handleLoadMoreButtonOnClick}>
					{isExtraHomeFeedStoriesLoading ? (
						<Loader
							isLoaderAbsolute={false}
							loaderSize="2.4rem"
							loaderBorderSize="0.4rem"
						/>
					) : (
						<Down />
					)}
				</button>
			)}
		</StorySidebarUsersStyle>
	);
};

export default StorySidebarUsers;
