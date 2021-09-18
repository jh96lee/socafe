import * as React from "react";
import { useSelector } from "react-redux";

import { Avatar } from "../../shared";
import PostCommentCenter from "./PostCommentCenter";
import PostCommentEnd from "./PostCommentEnd";

import { PostCommentStyle } from "../styles/PostCommentStyle";

const PostComment = ({ comment, setDeletedCommentID }) => {
	const {
		id,
		created_at,
		comment_user,
		comment_is_liked,
		comment_nodes_array,
		comment_total_likes,
		parent_comment_id,
	} = comment;

	const { notiInstigatedCommentID, notiReceivedCommentID } = useSelector(
		(state) => state.notificationsReducer
	);

	return (
		<PostCommentStyle
			isInstigatingComment={id === notiInstigatedCommentID}
			isReceivingComment={id === notiReceivedCommentID}
		>
			<Avatar
				userID={comment_user.id}
				username={comment_user.username}
				avatarURL={comment_user.avatar_url}
				avatarSize="4rem"
			/>

			<PostCommentCenter
				commentID={id}
				parentCommentID={parent_comment_id}
				createdAt={created_at}
				username={comment_user.username}
				commentNodesArray={comment_nodes_array}
			/>

			<PostCommentEnd
				commentID={id}
				commentUserID={comment_user.id}
				isCommentLikedProp={comment_is_liked}
				commentTotalLikesProp={comment_total_likes}
				parentCommentID={parent_comment_id}
				setDeletedCommentID={setDeletedCommentID}
			/>
		</PostCommentStyle>
	);
};

export default PostComment;
