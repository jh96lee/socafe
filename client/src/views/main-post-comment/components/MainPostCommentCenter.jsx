import * as React from "react";
import { Link } from "react-router-dom";

import MainPostCommentContents from "./MainPostCommentContents";
import MainPostCommentReply from "./MainPostCommentReply";

import {
	MainPostCommentCenterStyle,
	MainPostCommentCenterHeaderStyle,
	DotStyle,
} from "../styles/MainPostCommentCenterStyle";

import { convertDate } from "../../../utils/date/convertDate";

const MainPostCommentCenter = ({
	commentID,
	parentCommentID,
	createdAt,
	username,
	commentNodesArray,
}) => {
	return (
		<MainPostCommentCenterStyle>
			<MainPostCommentCenterHeaderStyle>
				<Link to={`/user/${username}`}>{username}</Link>

				<DotStyle />

				<span>{convertDate(createdAt)}</span>
			</MainPostCommentCenterHeaderStyle>

			<MainPostCommentContents commentNodesArray={commentNodesArray} />

			<MainPostCommentReply
				commentID={commentID}
				parentCommentID={parentCommentID}
				username={username}
			/>
		</MainPostCommentCenterStyle>
	);
};

export default MainPostCommentCenter;
