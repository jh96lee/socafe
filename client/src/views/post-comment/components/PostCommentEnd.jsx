import * as React from "react";
import { useSelector } from "react-redux";

import PostCommentMore from "./PostCommentMore";
import PostCommentLike from "./PostCommentLike";

import { PostCommentEndStyle } from "../styles/PostCommentEndStyle";

const PostCommentEnd = ({
	commentID,
	commentUserID,
	isCommentLikedProp,
	commentTotalLikesProp,
	parentCommentID,
	setDeletedCommentID,
}) => {
	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	return (
		<PostCommentEndStyle>
			{userID === commentUserID && (
				<PostCommentMore
					commentID={commentID}
					parentCommentID={parentCommentID}
					setDeletedCommentID={setDeletedCommentID}
				/>
			)}

			<PostCommentLike
				commentID={commentID}
				isCommentLikedProp={isCommentLikedProp}
				commentTotalLikesProp={commentTotalLikesProp}
			/>
		</PostCommentEndStyle>
	);
};

export default PostCommentEnd;
