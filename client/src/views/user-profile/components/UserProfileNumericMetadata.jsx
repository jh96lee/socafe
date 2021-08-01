import React from "react";
import { useSelector } from "react-redux";

import {
	UserProfileNumericMetadataStyle,
	UserProfileTotalsStyle,
} from "../styles/UserProfileNumericMetadataStyle";

const UserProfileNumericMetadata = () => {
	const { userProfile, userTotalFollowers, userTotalFollowings } = useSelector(
		(state) => state.userProfileReducer
	);

	return (
		<UserProfileNumericMetadataStyle>
			<UserProfileTotalsStyle>
				<h3>{userProfile.user_profile_total_posts}</h3>

				<span>posts</span>
			</UserProfileTotalsStyle>

			<UserProfileTotalsStyle>
				<h3>{userTotalFollowers}</h3>

				<span>followers</span>
			</UserProfileTotalsStyle>

			<UserProfileTotalsStyle>
				<h3>{userTotalFollowings}</h3>

				<span>following</span>
			</UserProfileTotalsStyle>
		</UserProfileNumericMetadataStyle>
	);
};

export default UserProfileNumericMetadata;
