import * as React from "react";
import { Link } from "react-router-dom";

import PostCommentContents from "./PostCommentContents";
import PostCommentReply from "./PostCommentReply";

import {
	PostCommentCenterStyle,
	PostCommentCenterHeaderStyle,
	DotStyle,
} from "../styles/PostCommentCenterStyle";

import { convertDate } from "../../../utils";

const PostCommentCenter = ({
	commentID,
	parentCommentID,
	createdAt,
	username,
	commentNodesArray,
}) => {
	return (
		<PostCommentCenterStyle>
			<PostCommentCenterHeaderStyle>
				<Link to={`/user/${username}`}>{username}</Link>

				<DotStyle />

				<span>{convertDate(createdAt)}</span>
			</PostCommentCenterHeaderStyle>

			<PostCommentContents commentNodesArray={commentNodesArray} />

			<PostCommentReply
				commentID={commentID}
				parentCommentID={parentCommentID}
				username={username}
			/>
		</PostCommentCenterStyle>
	);
};

export default PostCommentCenter;
