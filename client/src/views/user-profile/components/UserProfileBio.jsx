import * as React from "react";

import {
	UserProfileBioStyle,
	UserProfileNoBioStyle,
} from "../styles/UserProfileBioStyle";

import { Sad } from "../../../assets";

const UserProfileBio = ({ bio }) => {
	return (
		<React.Fragment>
			{bio ? (
				<UserProfileBioStyle>{bio}</UserProfileBioStyle>
			) : (
				<UserProfileNoBioStyle>
					<Sad /> <p>No bio yet</p>
				</UserProfileNoBioStyle>
			)}
		</React.Fragment>
	);
};

export default UserProfileBio;
