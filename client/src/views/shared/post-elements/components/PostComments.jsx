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

const PostComments = ({ conditionalRenderingVariable }) => {
	return (
		<PostCommentsStyle>
			{conditionalRenderingVariable ? (
				// TODO: render out actual comments
				<h1>Comments</h1>
			) : (
				<PostCommentsSkeletonsStyle>
					<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

					<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

					<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

					<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

					<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				</PostCommentsSkeletonsStyle>
			)}
		</PostCommentsStyle>
	);
};

export default PostComments;
