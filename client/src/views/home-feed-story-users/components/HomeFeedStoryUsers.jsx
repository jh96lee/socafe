import * as React from "react";
import { useSelector } from "react-redux";

import HomeFeedStoryUser from "./HomeFeedStoryUser";
import { Loader } from "../../shared";

import {
	fetchedHomeFeedStoriesArray,
	fetchedExtraHomeFeedStoriesArray,
	setHomeFeedStoriesNextAPIEndpoint,
} from "../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { HomeFeedStoryUsersStyle } from "../styles/HomeFeedStoryUsersStyle";

const HomeFeedStoryUsers = () => {
	const { user } = useSelector((state) => state.userReducer);

	const { homeFeedStoriesArray, homeFeedStoriesNextAPIEndpoint } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { isInitialContentsLoaded, fetchContents } = usePagination(
		"/story/feed",
		2,
		false,
		true,
		fetchedHomeFeedStoriesArray,
		fetchedExtraHomeFeedStoriesArray,
		setHomeFeedStoriesNextAPIEndpoint,
		homeFeedStoriesNextAPIEndpoint
	);

	React.useEffect(() => {
		if (user) {
			const token = fetchToken();

			fetchContents(true, "GET", null, {
				Authorization: `Bearer ${token}`,
			});
		} else {
			console.log("Login or register CTA");
		}
	}, []);

	return (
		<HomeFeedStoryUsersStyle>
			{isInitialContentsLoaded ? (
				<React.Fragment>
					{homeFeedStoriesArray.map(({ storyOwner, storyIDsArray }, idx) => {
						return (
							<HomeFeedStoryUser
								key={`home-feed-story__${storyOwner.username}`}
								storyOwner={storyOwner}
								storyIDsArray={storyIDsArray}
								storyIndex={idx}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedStoryUsersStyle>
	);
};

export default HomeFeedStoryUsers;
