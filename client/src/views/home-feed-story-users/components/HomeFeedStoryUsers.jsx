import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeFeedStoryUser from "./HomeFeedStoryUser";
import { Loader } from "../../shared";

import { fetchUsersStoriesArray } from "../../../redux/story/users-stories/usersStoriesAction";

import { HomeFeedStoryUsersStyle } from "../styles/HomeFeedStoryUsersStyle";

const HomeFeedStoryUsers = () => {
	const dispatch = useDispatch();

	const { usersStoriesArray, isUsersStoriesArrayLoaded } = useSelector(
		(state) => state.usersStoriesReducer
	);

	React.useEffect(() => {
		dispatch(fetchUsersStoriesArray());
	}, []);

	return (
		<HomeFeedStoryUsersStyle>
			{isUsersStoriesArrayLoaded ? (
				<React.Fragment>
					{usersStoriesArray.map(({ storyOwner, storyIDsArray }, idx) => {
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
