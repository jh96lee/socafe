import * as React from "react";
import { Link } from "react-router-dom";

import { MainPostCommentContentsStyle } from "../styles/MainPostCommentContentsStyle";

const MainPostCommentContents = ({ commentNodesArray }) => {
	return (
		<MainPostCommentContentsStyle>
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
		</MainPostCommentContentsStyle>
	);
};

export default MainPostCommentContents;
