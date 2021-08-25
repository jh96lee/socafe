import * as React from "react";
import { useSelector } from "react-redux";

import { Avatar } from "../../shared";
import MainPostCommentCenter from "./MainPostCommentCenter";
import MainPostCommentEnd from "./MainPostCommentEnd";

import { MainPostCommentStyle } from "../styles/MainPostCommentStyle";

const MainPostComment = ({ comment, setDeletedCommentID }) => {
	const {
		id,
		created_at,
		comment_user,
		comment_is_liked,
		comment_nodes_array,
		comment_total_likes,
		parent_comment_id,
		post_id,
	} = comment;

	console.log(comment);

	const { notiPostID, notiInstigatedCommentID, notiReceivedCommentID } =
		useSelector((state) => state.notificationsReducer);

	return (
		<MainPostCommentStyle
			isInstigatingComment={id === notiInstigatedCommentID}
			isReceivingComment={id === notiReceivedCommentID}
		>
			<Avatar
				userID={comment_user.id}
				username={comment_user.username}
				avatarURL={comment_user.avatar_url}
				avatarSize="4rem"
			/>

			<MainPostCommentCenter
				commentID={id}
				parentCommentID={parent_comment_id}
				createdAt={created_at}
				username={comment_user.username}
				commentNodesArray={comment_nodes_array}
			/>

			<MainPostCommentEnd
				commentID={id}
				commentUserID={comment_user.id}
				isCommentLikedProp={comment_is_liked}
				commentTotalLikesProp={comment_total_likes}
				parentCommentID={parent_comment_id}
				setDeletedCommentID={setDeletedCommentID}
			/>
		</MainPostCommentStyle>
	);
};

export default MainPostComment;
