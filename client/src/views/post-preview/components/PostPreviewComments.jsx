import * as React from "react";

import { Skeleton, IconElement } from "../../shared";

import { CloseAlt } from "../../../assets";

import {
	PostPreviewCommentsStyle,
	PostPreviewCommentsHeaderStyle,
	PostUserCommentsStyle,
	PostCommentInputStyle,
} from "../styles/PostPreviewCommentsStyle";

const PostPreviewComments = ({
	isPostCommentsOpen,
	handleClosePostCommentsOnClick,
}) => {
	const postPreviewCommentSkeletonHeight = "3.2rem";
	const postPreviewCommentInputSkeletonHeight = "4.5rem";

	return (
		<PostPreviewCommentsStyle
			id="post-preview-comments"
			isPostCommentsOpen={isPostCommentsOpen}
		>
			<PostPreviewCommentsHeaderStyle>
				<h5>Comments</h5>

				<IconElement
					onClick={handleClosePostCommentsOnClick}
					iconID="post-preview-comments__close-alt"
					iconRole="button"
					iconElementStyleObject={{
						iconSize: "1.2rem",
					}}
				>
					<CloseAlt />
				</IconElement>
			</PostPreviewCommentsHeaderStyle>

			<PostUserCommentsStyle>
				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>
			</PostUserCommentsStyle>

			<PostCommentInputStyle>
				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentInputSkeletonHeight}
				/>
			</PostCommentInputStyle>
		</PostPreviewCommentsStyle>
	);
};

export default PostPreviewComments;
