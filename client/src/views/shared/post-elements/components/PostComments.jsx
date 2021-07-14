import * as React from "react";

import { Skeleton } from "../../index";

import styled from "styled-components";

const PostCommentsStyle = styled.div`
	padding: 0 1rem;
`;

const PostCommentsSkeletonsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const PostComments = () => {
	return (
		<PostCommentsStyle>
			<h1>Comments</h1>
		</PostCommentsStyle>
	);
};

export default PostComments;
