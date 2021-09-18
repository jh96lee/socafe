import * as React from "react";
import { useSelector } from "react-redux";

import { PostComment } from "../../post-comment";
import PostCommentReplies from "./PostCommentReplies";
import PostViewOrHideReplies from "./PostViewOrHideReplies";

import { usePaginationReact } from "../../../hooks";

import { PostParentCommentStyle } from "../styles/PostParentCommentStyle";

const PostParentComment = ({ parentComment }) => {
	const [isRepliesOpen, setIsRepliesOpen] = React.useState(false);

	const { uploadedPostComment } = useSelector(
		(state) => state.postCommentInputReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const { id, comment_total_replies } = parentComment;

	const {
		contents,
		setContents,
		isInitialContentsLoaded,
		currentPage,
		setCurrentPage,
		nextAPIEndpoint,
		fetchContents,
	} = usePaginationReact(`/comment/reply/${id}/${userID}`, 1, true);

	React.useEffect(() => {
		// REVIEW: fetch initial comments
		if (isRepliesOpen && currentPage === 1) {
			fetchContents(true, "GET", null, null);
		}
	}, [isRepliesOpen]);

	React.useEffect(() => {
		// REVIEW: this is for fetching extra comments
		if (currentPage > 1) {
			fetchContents(false, "GET", null, null);
		}
	}, [currentPage]);

	// REVIEW: if the recently posted comment is a reply, then we open up, which then will trigger the initial comment fetching
	// REVIEW: then we reset mainPostComment
	React.useEffect(() => {
		if (uploadedPostComment) {
			if (
				uploadedPostComment.parent_comment_id &&
				uploadedPostComment.parent_comment_id === id
			) {
				setIsRepliesOpen(true);

				setContents((prevState) => [...prevState, uploadedPostComment]);
			}
		}
	}, [uploadedPostComment]);

	return (
		<PostParentCommentStyle>
			<PostComment comment={parentComment} />

			<PostViewOrHideReplies
				isRepliesOpen={isRepliesOpen}
				setIsRepliesOpen={setIsRepliesOpen}
				setCurrentPage={setCurrentPage}
				commentTotalReplies={comment_total_replies}
				nextAPIEndpoint={nextAPIEndpoint}
			/>

			{isRepliesOpen && (
				<PostCommentReplies
					replies={contents}
					setReplies={setContents}
					isRepliesLoaded={isInitialContentsLoaded}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</PostParentCommentStyle>
	);
};

export default PostParentComment;
