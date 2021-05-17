import React from "react";
import { useSelector } from "react-redux";

import { Skeleton } from "../../shared";

import styled from "styled-components";

const PostCaptionPreviewStyle = styled.div`
	& p {
		color: var(--primary-text-color);
	}
`;

const PostCaptionPreview = () => {
	const { postCaptionNodesArray } = useSelector(
		(state) => state.addPostReducer
	);

	const postCaptionPreviewRef = React.useRef();

	return (
		<PostCaptionPreviewStyle ref={postCaptionPreviewRef}>
			{postCaptionNodesArray.length === 0 ||
			postCaptionNodesArray[0].content === "<br>" ? (
				<Skeleton skeletonHeight="20rem" skeletonWidth="100%" />
			) : (
				postCaptionNodesArray.map(({ type, content }) => {
					if (content === "<br>") {
						return (
							<p>
								<br />
							</p>
						);
					} else {
						return <p>{content}</p>;
					}
				})
			)}
		</PostCaptionPreviewStyle>
	);
};

export default PostCaptionPreview;
