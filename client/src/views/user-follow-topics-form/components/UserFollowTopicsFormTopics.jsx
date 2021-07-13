import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../shared";
import UserFollowTopicsFormTopic from "./UserFollowTopicsFormTopic";

import { fetchTopics } from "../../../redux/user-follow-topics/userFollowTopicsAction";
import { fetchFollowingTopics } from "../../../redux/user-following-topics/userFollowingTopicsAction";

import { UserFollowTopicsFormTopicsStyle } from "../styles/UserFollowTopicsFormTopicsStyle";

const UserFollowTopicsFormTopics = () => {
	const dispatch = useDispatch();

	const { followTopics, isFollowTopicsLoading } = useSelector(
		(state) => state.userFollowTopicsReducer
	);

	React.useEffect(() => {
		dispatch(fetchFollowingTopics());

		dispatch(fetchTopics());
	}, []);

	return (
		<UserFollowTopicsFormTopicsStyle>
			{isFollowTopicsLoading ? (
				<Loader isLoaderAbsolute={true} />
			) : (
				<React.Fragment>
					{followTopics.map((topic) => {
						return (
							<UserFollowTopicsFormTopic
								key={`user-form-topics-form-topic__${topic.id}`}
								topic={topic}
							/>
						);
					})}
				</React.Fragment>
			)}
		</UserFollowTopicsFormTopicsStyle>
	);
};

export default UserFollowTopicsFormTopics;
