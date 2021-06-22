import * as React from "react";

import UserProfileBio from "./UserProfileBio";

import {
	UserProfileMetadataStyle,
	UserProfileTotalsDataStyle,
} from "../styles/UserProfileMetadataStyle";

const UserProfileMetadata = ({
	fullName,
	username,
	totalPosts,
	totalFollowers,
	totalFollowing,
	bio,
}) => {
	return (
		<UserProfileMetadataStyle>
			<h2>
				{fullName} <span>@{username}</span>
			</h2>

			<UserProfileTotalsDataStyle>
				<h3>
					{totalPosts} <span>Posts</span>
				</h3>

				<h3>
					{totalFollowers} <span>Followers</span>
				</h3>

				<h3>
					{totalFollowing} <span>Following</span>
				</h3>
			</UserProfileTotalsDataStyle>

			<UserProfileBio bio={bio} />
		</UserProfileMetadataStyle>
	);
};

export default UserProfileMetadata;
