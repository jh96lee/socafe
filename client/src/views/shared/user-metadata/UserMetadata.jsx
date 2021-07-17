import * as React from "react";
import { useHistory } from "react-router";

import { Avatar, Skeleton } from "../index";

import { UserMetadataStyle, UserNameDataStyle } from "./UserMetadataStyle";

const UserMetadata = ({
	userID,
	avatarURL,
	username,
	fullName,
	avatarSize,
	usernameFontSize,
	fullNameFontSize,
	avatarOnClick,
}) => {
	// REVIEW: logic for story ring needs to be added later

	const history = useHistory();

	const handleUsernameOnClick = () => {
		history.push(`/user/${userID}`);
	};

	return (
		<UserMetadataStyle>
			<Avatar
				avatarURL={avatarURL}
				avatarSize={avatarSize}
				avatarOnClick={avatarOnClick}
			/>

			<UserNameDataStyle
				usernameFontSize={usernameFontSize}
				fullNameFontSize={fullNameFontSize}
				onClick={handleUsernameOnClick}
			>
				<h5>@{username}</h5>

				<p>{fullName}</p>
			</UserNameDataStyle>
		</UserMetadataStyle>
	);
};

export default UserMetadata;
