import * as React from "react";
import { useSelector } from "react-redux";

import {
	UserProfileFollowingTopicsStyle,
	UserProfileFollowingTopicStyle,
} from "../styles/UserProfileFollowingTopicsStyle";

const UserProfileFollowingTopics = () => {
	const { userProfile } = useSelector((state) => state.userProfileReducer);

	return (
		<UserProfileFollowingTopicsStyle>
			{userProfile.user_profile_following_topics_array.map((topic) => {
				return (
					<UserProfileFollowingTopicStyle key={topic.topic_id}>
						<img src={topic.topic_url} alt="topic thumbnail" />

						<span>{topic.title}</span>
					</UserProfileFollowingTopicStyle>
				);
			})}
		</UserProfileFollowingTopicsStyle>
	);
};

export default UserProfileFollowingTopics;
