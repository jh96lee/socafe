import React from "react";
import axios from "axios";
import styled from "styled-components";

import { Button, Loader, IconElement } from "../../shared";

import { Down, More } from "../../../assets";

const UserProfileDataStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: min-content 35rem;
	gap: 5rem;
	min-width: 100%;
	min-height: 10rem;
`;

const AvatarStyle = styled.div`
	position: relative;
	background: ${(props) =>
		props.doesStoryExist
			? "linear-gradient(to right, #DD2476, #FF512F);"
			: "var(--txt-2)"};
	width: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	height: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	object-fit: cover;
	border-radius: 50%;

	&::after {
		content: "";
		position: absolute;
		z-index: 10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: var(--bg-1);
		width: 92%;
		height: 92%;
		border-radius: 50%;
	}

	& > img {
		position: absolute;
		z-index: 15;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 84%;
		height: 84%;
		border-radius: 50%;
		cursor: pointer;
	}
`;

const UserProfileMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	& > h2 {
		color: var(--txt-1);
		margin-bottom: 1.5rem;
	}

	& > h2 > span {
		font-size: 1.45rem;
		font-weight: 400;
		color: ${(props) => (props.theme.isDarkMode ? "#8cb5ff" : "#216ef9")};
	}

	& #user-profile-data__bio {
		color: var(--txt-1);
		margin-bottom: 2rem;
	}
`;

const UserProfileTotalsMetadataStyle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 2rem;
`;

const UserProfileTotalMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p {
		font-size: 1.3rem;
		font-weight: 300;
		color: ${(props) => (props.theme.isDarkMode ? "#c3c3c3" : "#717171")};
	}

	& > h5 {
		color: var(--txt-1);
		font-size: 1.7rem;
	}
`;

const UserProfileButtonsStyle = styled.div`
	display: grid;
	grid-template-columns: auto 5rem;
	gap: 1rem;

	& > *:nth-child(2) {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& svg {
		fill: var(--icon-2);
		width: 1.4rem;
		height: 1.4rem;
	}
`;

const UserProfileData = ({ userID }) => {
	const [userProfileData, setUserProfileData] = React.useState({});
	const [isUserProfileDataLoaded, setIsUserProfileDataLoaded] =
		React.useState(false);

	// FIX
	const doesStoryExist = true;
	const avatarSize = "20rem";

	const fetchUserProfileData = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${userID}`,
		});

		setUserProfileData(data);

		setIsUserProfileDataLoaded(true);
	};

	React.useEffect(() => {
		fetchUserProfileData();
	}, []);

	return (
		<UserProfileDataStyle>
			{isUserProfileDataLoaded ? (
				<React.Fragment>
					<AvatarStyle doesStoryExist={doesStoryExist} avatarSize={avatarSize}>
						<img
							src={userProfileData.avatar_url}
							alt={`${userProfileData.username}'s avatar`}
						/>
					</AvatarStyle>

					<UserProfileMetadataStyle>
						<h2>
							{userProfileData.full_name}{" "}
							<span>@{userProfileData.username}</span>
						</h2>

						{userProfileData.bio && (
							<p id="user-profile-data__bio">{userProfileData.bio}</p>
						)}

						<UserProfileTotalsMetadataStyle>
							<UserProfileTotalMetadataStyle>
								<h5>{userProfileData.totalPosts}</h5>

								<p>Posts</p>
							</UserProfileTotalMetadataStyle>

							<UserProfileTotalMetadataStyle>
								<h5>{userProfileData.totalFollowers}</h5>

								<p>Followers</p>
							</UserProfileTotalMetadataStyle>

							<UserProfileTotalMetadataStyle>
								<h5>{userProfileData.totalFollowing}</h5>

								<p>Following</p>
							</UserProfileTotalMetadataStyle>
						</UserProfileTotalsMetadataStyle>

						<UserProfileButtonsStyle>
							<Button
								buttonStyleObject={{
									buttonFontSize: "1.5rem",
									buttonBackgroundColor: "transparent",
									buttonColor: "#8cb5ff",
									buttonHoverBackgroundColor: "#4e78c336",
									buttonBoxShadow: "0 0 0 1.6px #8cb5ff",
									buttonWidth: "100%",
									buttonPadding: "1.2rem 0",
								}}
							>
								Follow
							</Button>

							<Button
								buttonStyleObject={{
									buttonBackgroundColor: "transparent",
									buttonColor: "#8cb5ff",
									buttonHoverBackgroundColor: "#4e78c336",
									buttonBoxShadow: "0 0 0 1.6px #8cb5ff",
									buttonWidth: "100%",
									buttonPadding: "1.2rem 0",
								}}
							>
								<Down />
							</Button>
						</UserProfileButtonsStyle>

						<IconElement
							iconRole="button"
							iconElementStyleObject={{
								elementPosition: "absolute",
								elementTop: "0",
								elementRight: "0",
							}}
						>
							<More />
						</IconElement>
					</UserProfileMetadataStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserProfileDataStyle>
	);
};

export default UserProfileData;
