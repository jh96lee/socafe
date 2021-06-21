import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

import { Loader, Avatar, Button } from "../../shared";
import UserProfileMetadata from "./UserProfileMetadata";
import UserProfileFollowButton from "./UserProfileFollowButton";

import { Down } from "../../../assets";

const UserProfileDataStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 18rem 35rem auto;
	grid-auto-rows: 18rem;
	gap: 2.5rem;
	min-width: 100%;
	min-height: 10rem;
`;

const UserProfileButtonsStyle = styled.div`
	display: grid;
	grid-template-columns: 12rem 4rem;
	grid-auto-rows: 4rem;
	justify-content: flex-end;
	gap: 1rem;
	padding-top: 1rem;

	& svg {
		margin: auto;
		width: 1.6rem;
		height: 1.6rem;
		fill: var(--txt-1);
	}
`;

const UserProfileData = () => {
	const [userProfileData, setUserProfileData] = React.useState({});
	const [totalFollowers, setTotalFollowers] = React.useState(null);
	const [isUserProfileDataLoaded, setIsUserProfileDataLoaded] =
		React.useState(false);

	const { user } = useSelector((state) => state.userReducer);
	// REVIEW: profile owner
	const leaderID = useParams().userID;
	// REVIEW: visitor or soon to be follower iD
	const visitorID = user ? user.id : 0;

	console.log(userProfileData);

	const fetchUserProfileData = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${leaderID}/${visitorID}`,
		});

		const {
			avatar_url,
			bio,
			full_name,
			username,
			isFollowing,
			totalFollowers,
			totalFollowing,
			totalPosts,
		} = data;

		setUserProfileData({
			avatar_url,
			bio,
			full_name,
			username,
			isFollowing,
			totalFollowing,
			totalPosts,
		});

		setTotalFollowers(totalFollowers);

		setIsUserProfileDataLoaded(true);
	};

	React.useEffect(() => {
		fetchUserProfileData();
	}, []);

	return (
		<UserProfileDataStyle>
			{isUserProfileDataLoaded ? (
				<React.Fragment>
					<Avatar
						avatarSize="100%"
						avatarBorderRadius="50%"
						avatarURL={userProfileData.avatar_url}
					/>

					<UserProfileMetadata
						fullName={userProfileData.full_name}
						username={userProfileData.username}
						totalPosts={userProfileData.totalPosts}
						totalFollowers={totalFollowers}
						totalFollowing={userProfileData.totalFollowing}
						bio={userProfileData.bio}
					/>

					<UserProfileButtonsStyle>
						<UserProfileFollowButton
							setTotalFollowers={setTotalFollowers}
							isUserFollowing={userProfileData.isFollowing}
							leaderID={leaderID}
							visitorID={visitorID}
						/>

						<Button
							buttonStyleObject={{
								buttonBackgroundColor: "transparent",
								buttonHoverBackgroundColor: "#4e78c336",
								buttonBoxShadow: "0 0 0 1.6px var(--blue-3)",
								buttonPadding: "0rem",
							}}
						>
							<Down />
						</Button>
					</UserProfileButtonsStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserProfileDataStyle>
	);
};

export default UserProfileData;
