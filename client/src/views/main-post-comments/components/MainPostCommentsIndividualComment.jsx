import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Avatar } from "../../shared";

const MainPostCommentsIndividualCommentStyle = styled.div`
	display: flex;
`;

const MainPostCommentsIndividualCommentBodyStyle = styled.div``;

const HeaderStyle = styled.div``;

const CommentStyle = styled.div``;

const FooterStyle = styled.div``;

const MainPostCommentsIndividualComment = ({ comment }) => {
	const {
		comment_id,
		comment_owner,
		parent_comment_id,
		post_comment_child_nodes_array,
	} = comment;

	return (
		<MainPostCommentsIndividualCommentStyle>
			<Avatar avatarURL={comment_owner.avatar_url} avatarSize="4.5rem" />

			<MainPostCommentsIndividualCommentBodyStyle>
				<HeaderStyle>
					<h5>{comment_owner.username}</h5>

					<span>May 5th, 2021</span>
				</HeaderStyle>

				<CommentStyle>
					{post_comment_child_nodes_array.map(
						({ node_type, node_value }, idx) => {
							if (node_type === "SPAN") {
								return <span>{node_value}</span>;
							} else if (node_type === "P") {
								return (
									<Link to={`/user/${node_value.substring(1)}`}>
										{node_value}
									</Link>
								);
							}
						}
					)}
				</CommentStyle>

				<FooterStyle></FooterStyle>
			</MainPostCommentsIndividualCommentBodyStyle>
		</MainPostCommentsIndividualCommentStyle>
	);
};

export default MainPostCommentsIndividualComment;
