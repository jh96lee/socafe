import * as React from "react";
import styled from "styled-components";

import UserProfileBio from "./UserProfileBio";

const UserProfileMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.7rem 0;

	& h2 {
		color: var(--txt-1);
	}

	& h2 > span {
		font-size: 1.45rem;
		font-weight: 400;
		color: ${(props) => (props.theme.isDarkMode ? "#8cb5ff" : "#216ef9")};
	}

	& > *:nth-child(1) {
		margin-bottom: 1rem;
	}

	& > *:nth-child(3) {
		margin: auto 0;
	}
`;

const UserProfileTotalsDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;

	& > h3 {
		color: var(--txt-1);
		font-weight: 500;
	}

	& h3 > span {
		font-size: 1.4rem;
		font-weight: 400;
		color: ${(props) => (props.theme.isDarkMode ? "#c3c3c3" : "#717171")};
		margin-left: 0.2rem;
	}
`;

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