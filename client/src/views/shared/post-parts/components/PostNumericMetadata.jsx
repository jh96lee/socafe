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
	conditionalRenderVariable,
}) => {
	return (
		<PostNumericMetadataStyle>
			<PostUser
				postUser={postUser}
				conditionalRenderVariable={conditionalRenderVariable}
			/>

			<PostTotalsDataStyle>
				<PostTotalLikes
					postTotalLikes={postTotalLikes}
					conditionalRenderVariable={conditionalRenderVariable}
				/>

				<PostTotalComments
					postTotalComments={postTotalComments}
					conditionalRenderVariable={conditionalRenderVariable}
				/>

				<PostBookmark />
			</PostTotalsDataStyle>
		</PostNumericMetadataStyle>
	);
};

export default PostNumericMetadata;
