import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../shared";
import { UserProfileCover } from "../index";
import UserProfileFollowingTopics from "./UserProfileFollowingTopics";
import UserProfileBody from "./UserProfileBody";

import { fetchUserProfile } from "../../../redux/user-profile/userProfileAction";

import { UserProfileStyle } from "../styles/UserProfileStyle";

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

					<UserProfileBody />

					<UserProfileFollowingTopics />
				</React.Fragment>
			)}
		</UserProfileStyle>
	);
};

export default UserProfile;
