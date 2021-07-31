import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { TextArea, Loader } from "../../shared";
import { UserProfileCover } from "../index";
import UserProfileUserMetadata from "./UserProfileUserMetadata";
import UserProfileNumericMetadata from "./UserProfileNumericMetadata";
import UserProfileButtons from "./UserProfileButtons";
import UserProfileFollowingTopics from "./UserProfileFollowingTopics";

import { fetchUserProfile } from "../../../redux/user-profile/userProfileAction";

import { Avatar } from "../../shared";

const UserProfileStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--input-default-bg-color);
	background-color: var(--bg-2);
	border: 1px solid var(--input-default-separator-color);

	& > *:nth-child(1) {
		height: 18rem;
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

const UserProfileBodyStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	width: 100%;

	& > *:nth-child(1) {
		justify-self: start;
		margin: -6rem 0 0 2rem;
	}

	& > *:nth-child(2) {
		margin: 0.5rem 0 0 1rem;
	}

	& > *:nth-child(3),
	& > *:nth-child(4),
	& > *:nth-child(5) {
		grid-column: 1 / 4;
		margin-top: 1.35rem;
		padding: 0 2rem;
	}

	@media (max-width: 800px) {
		grid-template-columns: min-content 1fr 18rem;

		& > *:nth-child(5) {
			grid-column: 3 / 4;
			grid-row: 1 / 2;
		}
	}

	@media (max-width: 500px) {
		grid-template-columns: min-content 1fr;

		& > *:nth-child(3),
		& > *:nth-child(4),
		& > *:nth-child(5) {
			padding: 0 3rem;
		}

		& > *:nth-child(5) {
			grid-column: 1 / 4;
			grid-row: 4;
		}
	}
`;

const UserProfile = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const { userProfile, isUserProfileLoaded, userProfileErrorMessage } =
		useSelector((state) => state.userProfileReducer);

	const visitorID = user ? user.id : 0;

	const leaderUsername = useParams().username;

	React.useEffect(() => {
		dispatch(fetchUserProfile(leaderUsername, visitorID));
	}, [leaderUsername]);

	return (
		<UserProfileStyle data-user-id={userProfile.id}>
			{!isUserProfileLoaded ? (
				<Loader />
			) : userProfileErrorMessage ? (
				<h1>User not found</h1>
			) : (
				<React.Fragment>
					<UserProfileCover />

					<UserProfileBodyStyle>
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

						<TextArea
							textAreaNodesArray={userProfile.user_profile_bio_nodes_array}
						/>

						<UserProfileNumericMetadata />

						<UserProfileButtons />
					</UserProfileBodyStyle>

					<UserProfileFollowingTopics />
				</React.Fragment>
			)}
		</UserProfileStyle>
	);
};

export default UserProfile;
