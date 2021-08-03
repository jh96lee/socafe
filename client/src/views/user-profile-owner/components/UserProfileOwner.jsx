import React from "react";

import UserProfileOwnerCover from "./UserProfileOwnerCover";
import UserProfileOwnerBody from "./UserProfileOwnerBody";

import { UserProfileOwnerStyle } from "../styles/UserProfileOwnerStyle";

const UserProfile = () => {
	return (
		<UserProfileOwnerStyle>
			<UserProfileOwnerCover />

			<UserProfileOwnerBody />
		</UserProfileOwnerStyle>
	);
};

export default UserProfile;
