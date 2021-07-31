import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Avatar } from "../../shared";

const UserProfileUserMetadataStyle = styled.div`
	display: flex;
	gap: 0.7rem;
	padding: 0.7rem 1.8rem 0 1.8rem;

	& > *:nth-child(1) {
		margin-top: -6.35rem;
	}
`;

const UserProfileUserNamesMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > h5 {
		color: var(--text-1);
		font-size: 1.7rem;
		font-weight: 600;
	}
`;

const UserProfileUserMetadata = () => {
	const { userProfile } = useSelector((state) => state.userProfileReducer);

	return (
		<UserProfileUserMetadataStyle>
			<Avatar
				avatarURL={userProfile.avatar_url}
				avatarSize="12rem"
				avatarOnClick={null}
				isAvatarBubblePresent={false}
			/>

			<UserProfileUserNamesMetadataStyle>
				<h5>{userProfile.full_name}</h5>

				<span>@{userProfile.username}</span>
			</UserProfileUserNamesMetadataStyle>
		</UserProfileUserMetadataStyle>
	);
};

export default UserProfileUserMetadata;
