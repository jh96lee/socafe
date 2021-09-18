import * as React from "react";
import { Link } from "react-router-dom";

import { PostCommentContentsStyle } from "../styles/PostCommentContentsStyle";

const PostCommentContents = ({ commentNodesArray }) => {
	return (
		<PostCommentContentsStyle>
			{commentNodesArray.map(({ node_type, node_value }, idx) => {
				return node_type === "P" ? (
					<Link
						key={`tagged-user__${idx}`}
						to={`/user/${node_value.substring(1)}`}
					>
						{node_value}
					</Link>
				) : (
					<span key={`comment-content__${idx}`}>{node_value}</span>
				);
			})}
		</PostCommentContentsStyle>
	);
};

export default PostCommentContents;
