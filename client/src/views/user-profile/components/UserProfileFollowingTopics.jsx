import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UserProfileFollowingTopicsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
	justify-content: center;
	gap: 1.5rem;
	padding: 3rem;
`;

const UserProfileFollowingTopicStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.7rem;

	& > img {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--input-default-separator-color);
	}

	& > span {
		font-weight: 400;
	}

	&:hover {
		cursor: pointer;
	}
`;

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
