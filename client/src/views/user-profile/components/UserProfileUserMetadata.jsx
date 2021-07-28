import React from "react";
import styled from "styled-components";

import { Avatar } from "../../shared";

const UserProfileUserMetadataStyle = styled.div`
	display: flex;
	gap: 0.7rem;
	padding: 0.7rem 1.8rem;

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

const UserProfileUserMetadata = ({ avatarURL, fullName, username }) => {
	return (
		<UserProfileUserMetadataStyle>
			<Avatar
				avatarURL={avatarURL}
				avatarSize="12rem"
				avatarOnClick={null}
				isAvatarBubblePresent={false}
			/>

			<UserProfileUserNamesMetadataStyle>
				<h5>{fullName}</h5>

				<span>@{username}</span>
			</UserProfileUserNamesMetadataStyle>
		</UserProfileUserMetadataStyle>
	);
};

export default UserProfileUserMetadata;
