import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Avatar } from "../../shared";

import { setSelectedUserStoriesIndex } from "../../../redux/story/users-stories/usersStoriesAction";

import { StorySidebarUserStyle } from "../styles/StorySidebarUserStyle";

const StorySidebarUser = ({ storyOwner, storyUserIdx }) => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { usersStoriesArray } = useSelector(
		(state) => state.usersStoriesReducer
	);

	const handleStorySidebarUserOnClick = () => {
		const { storyURLsArray } = usersStoriesArray[storyUserIdx];

		dispatch(setSelectedUserStoriesIndex(storyUserIdx));

		history.push(storyURLsArray[0]);
	};

	return (
		<StorySidebarUserStyle onClick={handleStorySidebarUserOnClick}>
			<Avatar
				userID={storyOwner.id}
				username={storyOwner.username}
				avatarURL={storyOwner.avatar_url}
				avatarSize="5rem"
				isAvatarBubblePresent={true}
			/>

			<p>{storyOwner.username}</p>
		</StorySidebarUserStyle>
	);
};

export default StorySidebarUser;
