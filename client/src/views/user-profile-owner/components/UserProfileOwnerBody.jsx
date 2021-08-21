import * as React from "react";
import { useSelector } from "react-redux";

import { TextArea, Avatar } from "../../shared";
import UserProfileOwnerFollowingTopics from "./UserProfileOwnerFollowingTopics";
import UserProfileOwnerNumericMetadata from "./UserProfileOwnerNumericMetadata";
import UserProfileOwnerButtons from "./UserProfileOwnerButtons";

import {
	UserProfileOwnerBodyStyle,
	UserProfileOwnerUserNamesMetadataStyle,
} from "../styles/UserProfileOwnerBodyStyle";

const UserProfileOwnerBody = () => {
	const { profileOwner } = useSelector(
		(state) => state.userProfileOwnerReducer
	);

	return (
		<UserProfileOwnerBodyStyle>
			<Avatar
				userID={profileOwner.id}
				username={profileOwner.username}
				avatarURL={profileOwner.avatar_url}
				avatarSize="13rem"
				avatarOnClick={null}
				isAvatarBubblePresent={false}
			/>

			<UserProfileOwnerUserNamesMetadataStyle>
				<h4>{profileOwner.full_name}</h4>

				<span>@{profileOwner.username}</span>
			</UserProfileOwnerUserNamesMetadataStyle>

			<TextArea
				textAreaNodesArray={profileOwner.profile_bio_nodes_array}
				charactersLimit={100}
			/>

			<UserProfileOwnerNumericMetadata />

			<UserProfileOwnerButtons />

			<UserProfileOwnerFollowingTopics />
		</UserProfileOwnerBodyStyle>
	);
};

export default UserProfileOwnerBody;
