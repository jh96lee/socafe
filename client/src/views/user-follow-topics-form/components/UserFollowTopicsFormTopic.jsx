import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
	addFollowingTopic,
	removeFollowingTopic,
} from "../../../redux/user-following-topics/userFollowingTopicsAction";

import { CheckmarkCircleFilled, Plus } from "../../../assets";

const UserFollowTopicsFormTopicStyle = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0.85rem;
	border-radius: 5rem;
	background-color: var(--input-default-bg-color);
	box-shadow: 0 0 0 1.6px var(--input-default-separator-color);

	& img {
		width: 5.1rem;
		height: 5.1rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > h5 {
		color: var(--text-1);
		margin: 0 1.6rem;
	}

	& svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) =>
			props.isTopicSelected
				? "var(--icon-success-color)"
				: "var(--icon-default-color)"};
		cursor: pointer;
	}

	&:hover {
		cursor: pointer;
	}
`;

const UserFollowTopicsFormTopic = ({ topic }) => {
	const [isTopicSelected, setIsTopicSelected] = React.useState(
		topic.is_following_topic ? true : false
	);

	const dispatch = useDispatch();

	const { followingTopics } = useSelector(
		(state) => state.userFollowingTopicsReducer
	);

	const handleUserFollowTopicsFormTopicOnClick = () => {
		setIsTopicSelected((prevState) => !prevState);
	};

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isTopicSelected === true) {
				dispatch(addFollowingTopic(topic));
			} else if (isTopicSelected === false) {
				dispatch(removeFollowingTopic(topic.id));
			}
		}

		afterInitialMount.current = true;
	}, [isTopicSelected]);

	React.useEffect(() => {
		if (followingTopics.length > 5) {
			if (topic.id === followingTopics[0].id) {
				setIsTopicSelected(false);
			}
		}
	}, [followingTopics]);

	return (
		<UserFollowTopicsFormTopicStyle
			isTopicSelected={isTopicSelected}
			onClick={handleUserFollowTopicsFormTopicOnClick}
		>
			<img src={topic.topic_url} alt="topic" />

			<h5>{topic.title}</h5>

			{isTopicSelected ? <CheckmarkCircleFilled /> : <Plus />}
		</UserFollowTopicsFormTopicStyle>
	);
};

export default UserFollowTopicsFormTopic;
