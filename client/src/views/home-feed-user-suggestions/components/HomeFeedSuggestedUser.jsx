import * as React from "react";

import { UserMetadata } from "../../shared";

import { followUserRequest, unfollowUserRequest } from "../../../utils";

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
				text={suggestedUser.username}
				subText={suggestedUser.full_name}
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
