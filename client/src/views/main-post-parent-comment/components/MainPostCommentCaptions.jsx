import React from "react";
import { Link } from "react-router-dom";

import { MainPostCommentCaptionsStyle } from "../styles/MainPostCommentCaptionsStyle";

const MainPostCommentCaptions = ({ commentNodesArray }) => {
	return (
		<MainPostCommentCaptionsStyle>
			{commentNodesArray.map(({ node_type, node_value }, idx) => {
				if (node_type === "SPAN") {
					return (
						<span key={`main-post-comment-captions-span__${idx}`}>
							{node_value}
						</span>
					);
				} else if (node_type === "P") {
					return (
						<Link
							to={`/user/${node_value.substring(1)}`}
							key={`main-post-comment-captions-link__${idx}`}
						>
							{node_value}
						</Link>
					);
				}
			})}
		</MainPostCommentCaptionsStyle>
	);
};

export default MainPostCommentCaptions;
