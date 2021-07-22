import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPostCommentCaptionsStyle = styled.div`
	margin: 0.4rem 0 0.6rem 0;

	& a {
		color: var(--text-1);
		font-weight: 500;
	}

	& span {
		color: var(--text-1);
	}
`;

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
