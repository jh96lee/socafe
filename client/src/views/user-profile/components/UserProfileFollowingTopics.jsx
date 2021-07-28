import * as React from "react";
import styled from "styled-components";

const UserProfileFollowingTopicsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	padding: 2rem;
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

const UserProfileFollowingTopics = ({ followingTopics }) => {
	return (
		<UserProfileFollowingTopicsStyle>
			{followingTopics.map((topic) => {
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
