import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Loader } from "../../shared";
import UserFollowTopicsFormTopics from "./UserFollowTopicsFormTopics";

import { submitTopicsToFollow } from "../../../redux/user-follow-topics/userFollowTopicsAction";

import { UserFollowTopicsFormStyle } from "../styles/UserFollowTopicsFormStyle";

const UserFollowTopicsForm = () => {
	const dispatch = useDispatch();

	const {
		isTopicsToFollowSubmitting,
		userFollowTopicsSuccessMessage,
		userFollowTopicsErrorMessage,
	} = useSelector((state) => state.userFollowTopicsReducer);

	const { followingTopics } = useSelector(
		(state) => state.userFollowingTopicsReducer
	);

	const handleUserFollowTopicsFormButtonOnClick = (e) => {
		e.preventDefault();

		dispatch(submitTopicsToFollow(followingTopics));
	};

	return (
		<UserFollowTopicsFormStyle>
			<h2>Choose Topics to Follow</h2>

			<UserFollowTopicsFormTopics />

			<Button
				success={userFollowTopicsSuccessMessage}
				error={userFollowTopicsErrorMessage}
				onClick={handleUserFollowTopicsFormButtonOnClick}
				buttonStyleObject={{
					buttonWidth: "30rem",
					buttonMargin: "4rem auto 0 auto",
				}}
			>
				{isTopicsToFollowSubmitting ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
				) : userFollowTopicsSuccessMessage ? (
					userFollowTopicsSuccessMessage
				) : userFollowTopicsErrorMessage ? (
					"Please retry"
				) : (
					"Submit"
				)}
			</Button>
		</UserFollowTopicsFormStyle>
	);
};

export default UserFollowTopicsForm;
