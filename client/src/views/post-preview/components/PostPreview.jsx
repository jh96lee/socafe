import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PostUploader from "./PostUploader";
import PostImagesPreview from "./PostImagesPreview";
import PostNumbersMetaData from "./PostNumbersMetaData";
import PostCategoriesPreview from "./PostCategoriesPreview";
import PostCaptionPreview from "./PostCaptionPreview";
import { Skeleton } from "../../shared";

const PostPreviewStyle = styled.div`
	display: grid;
	grid-template-columns: 65rem auto;
	grid-template-rows: 60rem;
	gap: 2rem;
	width: 100rem;
	margin: 3.5rem auto;
`;

const PostPreviewDetailsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const PostPreview = () => {
	const {
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		postCaptionNodesArray,
	} = useSelector((state) => state.addPostReducer);

	return (
		<PostPreviewStyle>
			<PostImagesPreview />

			<PostPreviewDetailsStyle>
				<PostCategoriesPreview />

				<PostUploader />

				<PostNumbersMetaData />

				<PostCaptionPreview />

				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />
				<Skeleton skeletonHeight="3rem" skeletonWidth="100%" />

				<Skeleton
					skeletonHeight="4.2rem"
					skeletonWidth="100%"
					skeletonBorderRadius="3rem"
				/>
			</PostPreviewDetailsStyle>
		</PostPreviewStyle>
	);
};

export default PostPreview;
