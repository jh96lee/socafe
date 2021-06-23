import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";

import UserProfileFollowButton from "./UserProfileFollowButton";

import {
	UserProfileButtonsStyle,
	UserProfileButtonStyle,
} from "../styles/UserProfileButtonsStyle";

import { Down, Edit } from "../../../assets";

const UserProfileButtons = () => {
	const { userProfile } = useSelector((state) => state.userProfileReducer);
	const { user } = useSelector((state) => state.userReducer);

	const leaderID = parseInt(useParams().userID);
	const visitorID = user ? parseInt(user.id) : 0;

	const history = useHistory();

	return (
		<UserProfileButtonsStyle profileOwnerVisited={visitorID === leaderID}>
			<UserProfileFollowButton
				leaderID={leaderID}
				visitorID={visitorID}
				isUserFollowing={userProfile.isFollowing}
				profileOwnerVisited={visitorID === leaderID}
			/>

			<UserProfileButtonStyle>
				<Down />
			</UserProfileButtonStyle>

			{visitorID === leaderID && (
				<UserProfileButtonStyle
					onClick={() => {
						history.push(`/profile/edit/${user.id}`);
					}}
				>
					<Edit />
				</UserProfileButtonStyle>
			)}
		</UserProfileButtonsStyle>
	);
};

export default UserProfileButtons;
