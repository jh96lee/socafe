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
	userMetadataStyleObject,
}) => {
	// REVIEW: logic for story ring needs to be added later

	const history = useHistory();

	const handleUsernameOnClick = () => {
		history.push(`/user/${username}`);
	};

	return (
		<UserMetadataStyle
			data-user-id={userID}
			{...userMetadataStyleObject}
			usernameFontSize={usernameFontSize}
			fullNameFontSize={fullNameFontSize}
		>
			<Avatar
				userID={userID}
				username={username}
				avatarURL={avatarURL}
				avatarSize={avatarSize}
				avatarOnClick={avatarOnClick}
			/>

			<div onClick={handleUsernameOnClick}>
				<h5>@{username}</h5>

				<p>{fullName}</p>
			</div>
		</UserMetadataStyle>
	);
};

export default UserMetadata;
