import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Avatar } from "../../shared";
import MainPostCommentCaptions from "./MainPostCommentCaptions";

import {
	setMainPostCommentRepliedCommentOwnerUsername,
	setMainPostCommentParentCommentID,
	setMainPostCommentRepliedCommentOwnerID,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { HeartEmpty } from "../../../assets";

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

const MainPostComment = ({ comment }) => {
	const dispatch = useDispatch();

	const {
		avatar_url,
		comment_id,
		post_comment_child_nodes_array,
		user_id,
		username,
	} = comment;

	const handleReplySpanOnClick = () => {
		dispatch(setMainPostCommentRepliedCommentOwnerUsername(username));

		dispatch(setMainPostCommentParentCommentID(comment_id));

		dispatch(setMainPostCommentRepliedCommentOwnerID(user_id));
	};

	return (
		<MainPostCommentStyle>
			<Avatar avatarURL={avatar_url} avatarSize="4rem" />

			<MainPostCommentBodyStyle>
				<MainPostCommentHeaderStyle>
					<Link to={`/user/${username}`}>{username}</Link>

					<DotStyle />

					<span>May 5th, 2021</span>
				</MainPostCommentHeaderStyle>

				<MainPostCommentCaptions
					commentNodesArray={post_comment_child_nodes_array}
				/>

				<span onClick={handleReplySpanOnClick}>reply</span>
			</MainPostCommentBodyStyle>

			<MainPostCommentLikesStyle>
				<HeartEmpty />

				<p>5</p>
			</MainPostCommentLikesStyle>
		</MainPostCommentStyle>
	);
};

export default MainPostComment;
