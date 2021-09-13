import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	addFollowingTopic,
	removeFollowingTopic,
} from "../../../redux/user-following-topics/userFollowingTopicsAction";

import { CheckmarkCircleFilled, CircularPlus } from "../../../assets";

import { UserFollowTopicsFormTopicStyle } from "../styles/UserFollowTopicsFormTopicStyle";

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

			{isTopicSelected ? <CheckmarkCircleFilled /> : <CircularPlus />}
		</UserFollowTopicsFormTopicStyle>
	);
};

export default UserFollowTopicsFormTopic;
