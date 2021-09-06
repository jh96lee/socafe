import * as React from "react";

import { UserMetadata } from "../../shared";

import { followUserRequest } from "../../../utils/user/followUserRequest";
import { unfollowUserRequest } from "../../../utils/user/unfollowUserRequest";

import {
	HomeFeedSuggestedUserStyle,
	HomeFeedFollowSuggestedUserButtonStyle,
} from "../styles/HomeFeedSuggestedUserStyle";

import { Follow, Following } from "../../../assets";

const HomeFeedSuggestedUser = ({ suggestedUser }) => {
	const [isFollowing, setIsFollowing] = React.useState(
		suggestedUser.profile_is_following
	);

	const handleFollowButtonOnClick = () => {
		setIsFollowing((prevState) => !prevState);
	};

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isFollowing) {
				followUserRequest(suggestedUser.id);
			} else {
				unfollowUserRequest(suggestedUser.id);
			}
		}

		afterInitialMount.current = true;
	}, [isFollowing]);

	return (
		<HomeFeedSuggestedUserStyle>
			<UserMetadata
				userID={suggestedUser.id}
				avatarURL={suggestedUser.avatar_url}
				username={suggestedUser.username}
				fullName={suggestedUser.full_name}
				avatarSize="4.4rem"
				usernameFontSize="1.38rem"
				fullNameFontSize="1.27rem"
			/>

			{/* FIX */}
			<HomeFeedFollowSuggestedUserButtonStyle
				isFollowing={isFollowing}
				onClick={handleFollowButtonOnClick}
			>
				{isFollowing ? "Following" : "Follow"}

				{isFollowing ? <Following /> : <Follow />}
			</HomeFeedFollowSuggestedUserButtonStyle>
		</HomeFeedSuggestedUserStyle>
	);
};

export default HomeFeedSuggestedUser;
