import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Avatar } from "../../shared";
import MainPostCommentCaptions from "./MainPostCommentCaptions";

import { HeartEmpty } from "../../../assets";

const MainPostCommentStyle = styled.div`
	display: flex;
	gap: 1.4rem;
	color: var(--text-1);
	width: fit-content;
	max-width: 30rem;
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

const MainPostCommentFooterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MainPostCommentLikesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& svg {
		fill: var(--icon-default-color);
		width: 1.7rem;
		height: 1.7rem;
	}
`;

const MainPostComment = ({ comment }) => {
	const {
		comment_id,
		comment_owner,
		parent_comment_id,
		post_comment_child_nodes_array,
	} = comment;

	return (
		<MainPostCommentStyle>
			<Avatar avatarURL={comment_owner.avatar_url} avatarSize="4.5rem" />

			<MainPostCommentBodyStyle>
				<MainPostCommentHeaderStyle>
					<Link to={`/user/${comment_owner.username}`}>
						{comment_owner.username}
					</Link>

					<DotStyle />

					<span>May 5th, 2021</span>
				</MainPostCommentHeaderStyle>

				<MainPostCommentCaptions
					commentNodesArray={post_comment_child_nodes_array}
				/>

				<MainPostCommentFooterStyle>
					<span>reply</span>

					<MainPostCommentLikesStyle>
						<HeartEmpty />

						<p>5</p>
					</MainPostCommentLikesStyle>
				</MainPostCommentFooterStyle>
			</MainPostCommentBodyStyle>
		</MainPostCommentStyle>
	);
};

export default MainPostComment;
