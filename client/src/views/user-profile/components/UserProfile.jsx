import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { TextArea, Loader } from "../../shared";
import { UserProfileCover } from "../index";
import UserProfileUserMetadata from "./UserProfileUserMetadata";
import UserProfileNumericMetadata from "./UserProfileNumericMetadata";
import UserProfileButtons from "./UserProfileButtons";
import UserProfileFollowingTopics from "./UserProfileFollowingTopics";

const UserProfileStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--input-default-bg-color);
	background-color: var(--bg-2);
	border: 1px solid var(--input-default-separator-color);

	& > *:nth-child(1) {
		height: 18rem;
	}
`;

const UserProfileBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin: 1.8rem 0;
	padding: 0 1.8rem;

	& p {
		font-size: 1.3rem;
		font-weight: 400;
	}
`;

const UserProfile = () => {
	const [profileOwner, setProfileOwner] = React.useState({});
	const [isProfileOwnerLoaded, setIsProfileOwnerLoaded] = React.useState(false);

	const { user } = useSelector((state) => state.userReducer);

	const visitorID = user ? user.id : 0;

	const { username } = useParams();

	const fetchUserProfile = async () => {
		setIsProfileOwnerLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${username}/${visitorID}`,
		});

		setProfileOwner(data);

		console.log(data);

		setIsProfileOwnerLoaded(true);
	};

	React.useEffect(() => {
		fetchUserProfile();
	}, [username]);

	return (
		<UserProfileStyle>
			{!isProfileOwnerLoaded ? (
				<Loader />
			) : profileOwner.error ? (
				<h1>User not found</h1>
			) : (
				<React.Fragment>
					<UserProfileCover />

					<UserProfileUserMetadata
						avatarURL={profileOwner.avatar_url}
						fullName={profileOwner.full_name}
						username={profileOwner.username}
					/>

					<UserProfileBodyStyle>
						<TextArea
							textAreaNodesArray={profileOwner.user_profile_bio_nodes_array}
						/>

						<UserProfileNumericMetadata
							totalPosts={profileOwner.user_profile_total_posts}
							totalFollowers={profileOwner.user_profile_total_followers}
							totalFollowings={profileOwner.user_profile_total_following}
						/>

						<UserProfileButtons />
					</UserProfileBodyStyle>

					<UserProfileFollowingTopics
						followingTopics={profileOwner.user_profile_following_topics_array}
					/>
				</React.Fragment>
			)}
		</UserProfileStyle>
	);
};

export default UserProfile;
