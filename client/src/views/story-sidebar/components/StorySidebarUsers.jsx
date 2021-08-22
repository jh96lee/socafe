import * as React from "react";
import { useSelector } from "react-redux";

import StorySidebarUser from "./StorySidebarUser";

import { StorySidebarUsersStyle } from "../styles/StorySidebarUsersStyle";

const StorySidebarUsers = () => {
	const { usersStoriesArray, usersStoriesErrorMessage } = useSelector(
		(state) => state.usersStoriesReducer
	);

	return (
		<StorySidebarUsersStyle>
			{usersStoriesArray && !usersStoriesErrorMessage ? (
				usersStoriesArray.map(({ storyOwner }, idx) => {
					return (
						<StorySidebarUser storyOwner={storyOwner} storyUserIdx={idx} />
					);
				})
			) : (
				<h1>{usersStoriesErrorMessage && usersStoriesErrorMessage.story}</h1>
			)}
		</StorySidebarUsersStyle>
	);
};

export default StorySidebarUsers;
