import * as React from "react";
import styled from "styled-components";

import { Skeleton } from "../../../shared";
import PostImages from "./PostImages";
import PostTaggedUsers from "./PostTaggedUsers";

const PostMainStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const PostMain = ({ postImagesArray, postTaggedUsersArray }) => {
	return (
		<PostMainStyle>
			{!postImagesArray || postImagesArray.length > 0 ? (
				<PostImages postImagesArray={postImagesArray} />
			) : (
				<Skeleton skeletonWidth="100%" skeletonHeight="100%" />
			)}

			<PostTaggedUsers postTaggedUsersArray={postTaggedUsersArray} />
		</PostMainStyle>
	);
};

export default PostMain;
