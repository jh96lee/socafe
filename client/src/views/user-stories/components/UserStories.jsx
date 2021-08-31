import React from "react";

import { useSelector } from "react-redux";

import UserStory from "./UserStory";

import { UserStoriesStyle } from "../styles/UserStoriesStyle";

const UserStories = () => {
	const { userStoriesArray } = useSelector((state) => state.userStoriesReducer);

	return (
		<UserStoriesStyle>
			{userStoriesArray.map((story, idx) => {
				return <UserStory story={story} storyIdx={idx} />;
			})}
		</UserStoriesStyle>
	);
};

export default UserStories;
