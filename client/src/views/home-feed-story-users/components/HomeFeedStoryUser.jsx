import * as React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Avatar } from "../../shared";

import { setSelectedUserStoriesIndex } from "../../../redux/story/users-stories/usersStoriesAction";

import { HomeFeedStoryUserStyle } from "../styles/HomeFeedStoryUserStyle";

const HomeFeedStoryUser = ({ storyOwner, storyIDsArray, storyIndex }) => {
	const dispatch = useDispatch();

	const history = useHistory();

	const handleHomeFeedStoryUserOnClick = () => {
		dispatch(setSelectedUserStoriesIndex(storyIndex));

		history.push(`/story/${storyOwner.id}/${storyIDsArray[0]}`);
	};

	return (
		<HomeFeedStoryUserStyle onClick={handleHomeFeedStoryUserOnClick}>
			<Avatar
				userID={storyOwner.id}
				username={storyOwner.username}
				avatarURL={storyOwner.avatar_url}
				avatarSize="5.5rem"
				isAvatarBubblePresent={true}
			/>

			<p>{storyOwner.username}</p>
		</HomeFeedStoryUserStyle>
	);
};

export default HomeFeedStoryUser;
