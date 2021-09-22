import * as React from "react";
import { useHistory } from "react-router-dom";

import { Avatar } from "../../shared";

import { HomeFeedStoryUserStyle } from "../styles/HomeFeedStoryUserStyle";

const HomeFeedStoryUser = ({ storyOwner, storyIDsArray }) => {
	const history = useHistory();

	const handleHomeFeedStoryUserOnClick = () => {
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
