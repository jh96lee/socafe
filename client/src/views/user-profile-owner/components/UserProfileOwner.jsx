import React from "react";
import { useSelector } from "react-redux";

import UserProfileOwnerCover from "./UserProfileOwnerCover";
import UserProfileOwnerBody from "./UserProfileOwnerBody";
import { Loader } from "../../shared";

import { UserProfileOwnerStyle } from "../styles/UserProfileOwnerStyle";

const UserProfile = () => {
	const { isProfileOwnerLoaded } = useSelector(
		(state) => state.userProfileOwnerReducer
	);

	return (
		<UserProfileOwnerStyle>
			{isProfileOwnerLoaded ? (
				<React.Fragment>
					<UserProfileOwnerCover />

					<UserProfileOwnerBody />
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserProfileOwnerStyle>
	);
};

export default UserProfile;
