import * as React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NotificationTextStyle = styled.p`
	color: var(--text-1);
	font-size: 1.44rem;

	& > a {
		color: var(--text-1);
		font-size: 1.44rem;
		font-weight: 600;
		text-decoration: underline;
	}
`;

const NotificationTag = ({ notification, handlePostLinkOnClick }) => {
	const { instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			tagged you on a comment left on this{" "}
			<Link to={`/post/${post_id}`} onClick={handlePostLinkOnClick}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationTag;