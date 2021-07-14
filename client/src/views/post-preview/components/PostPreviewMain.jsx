import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { PostImages, PostTaggedUsers, Skeleton } from "../../shared";

const PostModalMainStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const PostPreviewMain = () => {
	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);

	const { postUsersArray } = useSelector((state) => state.postUsersReducer);

	return (
		<PostModalMainStyle>
			{uploadedPostImagesArray.length > 0 ? (
				<PostImages postImagesArray={uploadedPostImagesArray} />
			) : (
				<Skeleton skeletonWidth="100%" skeletonHeight="100%" />
			)}

			<PostTaggedUsers postTaggedUsersArray={postUsersArray} />
		</PostModalMainStyle>
	);
};

export default PostPreviewMain;
