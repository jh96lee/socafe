import React from "react";
import { useSelector } from "react-redux";

import {
	UserProfileOwnerNumericMetadataStyle,
	UserProfileOwnerTotalsStyle,
} from "../styles/UserProfileOwnerNumericMetadataStyle";

const UserProfileOwnerNumericMetadata = () => {
	const {
		profileOwner,
		profileOwnerTotalFollowers,
		profileOwnerTotalFollowings,
	} = useSelector((state) => state.userProfileOwnerReducer);

	return (
		<UserProfileOwnerNumericMetadataStyle>
			<UserProfileOwnerTotalsStyle>
				<h3>{profileOwner.user_profile_total_posts}</h3>

				<span>posts</span>
			</UserProfileOwnerTotalsStyle>

			<UserProfileOwnerTotalsStyle>
				<h3>{profileOwnerTotalFollowers}</h3>

				<span>followers</span>
			</UserProfileOwnerTotalsStyle>

			<UserProfileOwnerTotalsStyle>
				<h3>{profileOwnerTotalFollowings}</h3>

				<span>following</span>
			</UserProfileOwnerTotalsStyle>
		</UserProfileOwnerNumericMetadataStyle>
	);
};

export default UserProfileOwnerNumericMetadata;
