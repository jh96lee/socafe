import * as React from "react";

import PostTotalLikes from "./PostTotalLikes";
import PostTotalComments from "./PostTotalComments";
import PostBookmark from "./PostBookmark";
import PostUser from "./PostUser";

import {
	PostNumericMetadataStyle,
	PostTotalsDataStyle,
} from "../styles/PostNumericMetadataStyle";

const PostNumericMetadata = ({
	postUser,
	postTotalLikes,
	postTotalComments,
	conditionalPostUserRenderingVariable,
	conditionalPostTotalLikesRenderingVariable,
	conditionalPostTotalCommentsRenderingVariable,
}) => {
	return (
		<PostNumericMetadataStyle>
			<PostUser
				postUser={postUser}
				conditionalPostUserRenderingVariable={
					conditionalPostUserRenderingVariable
				}
			/>

			<PostTotalsDataStyle>
				<PostTotalLikes
					postTotalLikes={postTotalLikes}
					conditionalPostTotalLikesRenderingVariable={
						conditionalPostTotalLikesRenderingVariable
					}
				/>

				<PostTotalComments
					postTotalComments={postTotalComments}
					conditionalPostTotalCommentsRenderingVariable={
						conditionalPostTotalCommentsRenderingVariable
					}
				/>

				<PostBookmark />
			</PostTotalsDataStyle>
		</PostNumericMetadataStyle>
	);
};

export default PostNumericMetadata;
