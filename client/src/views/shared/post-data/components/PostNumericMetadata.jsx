import * as React from "react";

import { Skeleton } from "../../index";

import {
	PostNumericMetadataStyle,
	PostNumericTotalsMetadataStyle,
} from "../styles/PostNumericMetadataStyle";

import { Heart, Comment } from "../../../../assets";

const PostNumericMetadata = ({
	postTotalLikes,
	postTotalComments,
	conditionalPostNumericMetadataVariable,
}) => {
	const [isLiked, setIsLiked] = React.useState(false);

	return (
		<PostNumericMetadataStyle>
			<PostNumericTotalsMetadataStyle>
				<Heart id="post-heart" />

				{conditionalPostNumericMetadataVariable ? (
					<h5>{postTotalLikes} Likes</h5>
				) : (
					<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
				)}
			</PostNumericTotalsMetadataStyle>

			<PostNumericTotalsMetadataStyle>
				<Comment id="post-comment" />

				{conditionalPostNumericMetadataVariable ? (
					<h5> {postTotalComments} Comments</h5>
				) : (
					<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
				)}
			</PostNumericTotalsMetadataStyle>
		</PostNumericMetadataStyle>
	);
};

export default PostNumericMetadata;
