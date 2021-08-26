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

const NotificationLike = ({ notification, handlePostLinkOnClick }) => {
	const { id, instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			liked your{" "}
			<Link to={`/post/${post_id}`} onClick={() => handlePostLinkOnClick(id)}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationLike;
