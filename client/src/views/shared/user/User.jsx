import * as React from "react";
import { useHistory } from "react-router";

import { Avatar, Skeleton } from "../index";

import { UserStyle, UserMetadataStyle } from "./UserStyle";

const User = ({
	userID,
	avatarURL,
	username,
	fullName,
	avatarSize,
	usernameFontSize,
	fullNameFontSize,
	avatarOnClick,
	conditionalRenderingVariable,
}) => {
	// REVIEW: logic for story ring needs to be added later

	const history = useHistory();

	const handleUsernameOnClick = () => {
		history.push(`/user/${userID}`);
	};

	return (
		<UserStyle avatarSize={avatarSize}>
			{conditionalRenderingVariable ? (
				<Avatar
					avatarURL={avatarURL}
					avatarSize="4.2rem"
					avatarOnClick={avatarOnClick}
				/>
			) : (
				<Skeleton
					skeletonWidth={avatarSize}
					skeletonHeight={avatarSize}
					skeletonBorderRadius="50%"
				/>
			)}

			<UserMetadataStyle
				usernameFontSize={usernameFontSize}
				fullNameFontSize={fullNameFontSize}
				conditionalRenderingVariable={conditionalRenderingVariable}
				onClick={handleUsernameOnClick}
			>
				{conditionalRenderingVariable ? (
					<h5>@{username}</h5>
				) : (
					<Skeleton
						skeletonWidth="6.5rem"
						skeletonHeight="1.7rem"
						skeletonBorderRadius="1rem"
					/>
				)}

				{conditionalRenderingVariable ? (
					<p>{fullName}</p>
				) : (
					<Skeleton
						skeletonWidth="8rem"
						skeletonHeight="1.5rem"
						skeletonBorderRadius="1rem"
					/>
				)}
			</UserMetadataStyle>
		</UserStyle>
	);
};

export default User;
