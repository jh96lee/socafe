import * as React from "react";
import { useSelector } from "react-redux";

import {
	UserProfileOwnerFollowingTopicsStyle,
	UserProfileOwnerFollowingTopicStyle,
} from "../styles/UserProfileOwnerFollowingTopicsStyle";

const UserProfileOwnerFollowingTopics = () => {
	const { profileOwner } = useSelector(
		(state) => state.userProfileOwnerReducer
	);

	return (
		<UserProfileOwnerFollowingTopicsStyle>
			{profileOwner.user_profile_following_topics_array.map((topic) => {
				return (
					<UserProfileOwnerFollowingTopicStyle key={topic.topic_id}>
						<img src={topic.topic_url} alt="topic thumbnail" />

						<span>{topic.title}</span>
					</UserProfileOwnerFollowingTopicStyle>
				);
			})}
		</UserProfileOwnerFollowingTopicsStyle>
	);
};

export default UserProfileOwnerFollowingTopics;
