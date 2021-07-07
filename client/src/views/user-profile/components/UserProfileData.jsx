import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { Loader, Avatar } from "../../shared";
import UserProfileMetadata from "./UserProfileMetadata";
import UserProfileButtons from "./UserProfileButtons";

import { fetchUserProfile } from "../../../redux/user-profile/userProfileAction";

import { UserProfileDataStyle } from "../styles/UserProfileDataStyle";

const UserProfileData = () => {
	const { userProfile, totalFollowers, totalFollowing, isUserProfileLoaded } =
		useSelector((state) => state.userProfileReducer);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const leaderID = parseInt(useParams().userID);
	const visitorID = user ? user.id : 0;

	React.useEffect(() => {
		dispatch(fetchUserProfile(leaderID, visitorID));
	}, [leaderID]);

	return (
		<UserProfileDataStyle>
			{isUserProfileLoaded ? (
				<React.Fragment>
					<Avatar avatarSize="100%" avatarURL={userProfile.avatar_url} />

					<UserProfileMetadata
						fullName={userProfile.full_name}
						username={userProfile.username}
						totalPosts={userProfile.totalPosts}
						totalFollowers={totalFollowers}
						totalFollowing={totalFollowing}
						bio={userProfile.bio}
					/>

					<UserProfileButtons />
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserProfileDataStyle>
	);
};

export default UserProfileData;
