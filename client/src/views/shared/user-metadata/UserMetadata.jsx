import * as React from "react";
import { useHistory } from "react-router";

import { Avatar } from "../index";

import { UserMetadataStyle } from "./UserMetadataStyle";

const UserMetadata = ({
	userID,
	avatarURL,
	username,
	text,
	subText,
	avatarSize = "4rem",
	textFontSize,
	subTextFontSize,
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
			textFontSize={textFontSize}
			subTextFontSize={subTextFontSize}
			{...userMetadataStyleObject}
		>
			<Avatar
				userID={userID}
				username={username}
				avatarURL={avatarURL}
				avatarSize={avatarSize}
				avatarOnClick={avatarOnClick}
			/>

			<div onClick={handleUsernameOnClick}>
				<p>{text}</p>

				<span>{subText}</span>
			</div>
		</UserMetadataStyle>
	);
};

export default UserMetadata;
