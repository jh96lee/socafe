import * as React from "react";
import { useSelector } from "react-redux";

import { TextArea, Avatar } from "../../shared";
import UserProfileNumericMetadata from "./UserProfileNumericMetadata";
import UserProfileButtons from "./UserProfileButtons";

import {
	UserProfileBodyStyle,
	UserProfileUserNamesMetadataStyle,
} from "../styles/UserProfileBodyStyle";

const UserProfileBody = () => {
	const { userProfile } = useSelector((state) => state.userProfileReducer);

	return (
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

			<TextArea textAreaNodesArray={userProfile.user_profile_bio_nodes_array} />

			<UserProfileNumericMetadata />

			<UserProfileButtons />
		</UserProfileBodyStyle>
	);
};

export default UserProfileBody;
