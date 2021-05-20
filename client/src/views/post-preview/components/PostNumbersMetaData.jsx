import * as React from "react";

import { Skeleton } from "../../shared";

import { Heart, Comment } from "../../../assets";

import { PostNumbersMetaDataStyle } from "../styles/PostNumbersMetaDataStyle";

const PostNumbersMetaData = () => {
	return (
		<PostNumbersMetaDataStyle>
			<div>
				<Heart id="post-preview-heart" />

				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			</div>

			<div>
				<Comment id="post-preview-comment" />

				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			</div>
		</PostNumbersMetaDataStyle>
	);
};

export default PostNumbersMetaData;
