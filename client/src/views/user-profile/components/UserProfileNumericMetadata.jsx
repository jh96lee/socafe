import React from "react";
import styled from "styled-components";

const UserProfileNumericMetadataStyle = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const UserProfileTotalsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h3 {
		color: var(--text-1);
	}
`;

const UserProfileNumericMetadata = ({
	totalPosts,
	totalFollowers,
	totalFollowings,
}) => {
	return (
		<UserProfileNumericMetadataStyle>
			<UserProfileTotalsStyle>
				<h3>{totalPosts}</h3>

				<span>posts</span>
			</UserProfileTotalsStyle>

			<UserProfileTotalsStyle>
				<h3>{totalFollowers}</h3>

				<span>followers</span>
			</UserProfileTotalsStyle>

			<UserProfileTotalsStyle>
				<h3>{totalFollowings}</h3>

				<span>following</span>
			</UserProfileTotalsStyle>
		</UserProfileNumericMetadataStyle>
	);
};

export default UserProfileNumericMetadata;
