import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UserProfileNumericMetadataStyle = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 800px) {
		justify-content: center;
		gap: 15%;
	}
`;

const UserProfileTotalsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h3 {
		color: var(--text-1);
	}
`;

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
