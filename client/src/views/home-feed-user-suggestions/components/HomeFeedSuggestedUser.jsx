import * as React from "react";

import { UserMetadata, Icon, Button } from "../../shared";

import { followUserRequest, unfollowUserRequest } from "../../../utils";

import { HomeFeedSuggestedUserStyle } from "../styles/HomeFeedSuggestedUserStyle";

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
				textFontSize="1.35rem"
				subTextFontSize="1.25rem"
			/>

			<Button
				buttonType="standalone"
				onClick={handleFollowButtonOnClick}
				buttonStyleObject={{ buttonFontSize: "1.35rem" }}
				otherProps={{
					display: "flex",
					alignItems: "center",
					gap: "0.6rem",
				}}
			>
				{isFollowing ? "Following" : "Follow"}

				{isFollowing ? (
					<Icon iconRole="button" iconType="standalone" iconSize="1.5rem">
						<Following />
					</Icon>
				) : (
					<Icon iconRole="button" iconType="standalone" iconSize="1.5rem">
						<Follow />
					</Icon>
				)}
			</Button>
		</HomeFeedSuggestedUserStyle>
	);
};

export default HomeFeedSuggestedUser;
