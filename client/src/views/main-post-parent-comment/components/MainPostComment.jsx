import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Avatar } from "../../shared";
import MainPostCommentCaptions from "./MainPostCommentCaptions";

import {
	setMainPostCommentReplyingToUsername,
	setMainPostCommentParentCommentID,
	setMainPostCommentRepliedCommentID,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { convertDate } from "../../../utils/date/convertDate";

import { HeartEmpty, HeartFill } from "../../../assets";

const MainPostCommentStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1.4rem;
	color: var(--text-1);
	width: 100%;
`;

const MainPostCommentBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainPostCommentHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	& > a {
		color: var(--text-1);
		font-size: 1.45rem;
		font-weight: 500;
	}
`;

const DotStyle = styled.div`
	height: 3px;
	width: 3px;
	background-color: grey;
	border-radius: 50%;
`;

const MainPostCommentLikesStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;

	& svg {
		fill: var(--icon-default-color);
		width: 1.7rem;
		height: 1.7rem;
	}
`;

const MainPostComment = ({ comment, replyParentCommentID }) => {
	const dispatch = useDispatch();

	const {
		created_at,
		avatar_url,
		username,
		comment_id,
		comment_nodes_array,
		comment_total_likes,
		comment_is_liked,
	} = comment;

	const handleReplySpanOnClick = () => {
		dispatch(setMainPostCommentReplyingToUsername(username));

		dispatch(setMainPostCommentParentCommentID(replyParentCommentID));

		dispatch(setMainPostCommentRepliedCommentID(comment_id));
	};

	return (
		<MainPostCommentStyle>
			<Avatar avatarURL={avatar_url} avatarSize="4rem" />

			<MainPostCommentBodyStyle>
				<MainPostCommentHeaderStyle>
					<Link to={`/user/${username}`}>{username}</Link>

					<DotStyle />

					<span>{convertDate(created_at)}</span>
				</MainPostCommentHeaderStyle>

				<MainPostCommentCaptions commentNodesArray={comment_nodes_array} />

				<span onClick={handleReplySpanOnClick}>reply</span>
			</MainPostCommentBodyStyle>

			<MainPostCommentLikesStyle>
				{comment_is_liked ? <HeartFill /> : <HeartEmpty />}

				<p>{comment_total_likes}</p>
			</MainPostCommentLikesStyle>
		</MainPostCommentStyle>
	);
};

export default MainPostComment;
