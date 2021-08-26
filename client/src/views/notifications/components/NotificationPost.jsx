import * as React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NotificationTextStyle = styled.p`
	color: var(--text-1);
	font-size: 1.37rem;

	& > a {
		color: var(--text-1);
		font-size: 1.37rem;
		font-weight: 600;
		text-decoration: underline;
	}
`;

const NotificationPost = ({ notification, handlePostLinkOnClick }) => {
	const { id, instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			left a comment on your{" "}
			<Link to={`/post/${post_id}`} onClick={() => handlePostLinkOnClick(id)}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationPost;
