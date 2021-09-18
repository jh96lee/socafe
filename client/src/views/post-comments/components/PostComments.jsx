import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Icon, Loader } from "../../shared";
import { PostParentComment } from "../../post-parent-comment";

import {
	fetchPostComments,
	fetchExtraPostComments,
	setPostCommentsPage,
	resetPostcomments,
	addNewPostComment,
} from "../../../redux/post-comment/post-comments/postCommentsAction";

import { PostCommentsStyle } from "../styles/PostCommentsStyle";

import { CircularPlus } from "../../../assets";

const MainPostComments = () => {
	const dispatch = useDispatch();

	const { uploadedPostComment } = useSelector(
		(state) => state.postCommentInputReducer
	);

	const {
		currentPostCommentsPage,
		isPostCommentsLoaded,
		postComments,
		postCommentsNextAPIEndpoint,
	} = useSelector((state) => state.postCommentsReducer);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;
	const postID = parseInt(useParams().postID);

	React.useEffect(() => {
		dispatch(fetchPostComments(1, `/comment/parent/${postID}/${userID}`));

		return () => {
			dispatch(resetPostcomments());
		};
	}, [postID]);

	React.useEffect(() => {
		if (currentPostCommentsPage > 1) {
			dispatch(fetchExtraPostComments(postCommentsNextAPIEndpoint));
		}
	}, [currentPostCommentsPage]);

	// REVIEW: add uploaded PARENT comment
	React.useEffect(() => {
		if (uploadedPostComment !== null) {
			if (
				uploadedPostComment.post_id === postID &&
				uploadedPostComment.parent_comment_id === null
			) {
				dispatch(addNewPostComment(uploadedPostComment));
			}
		}
	}, [uploadedPostComment]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setPostCommentsPage());
	};

	return (
		<PostCommentsStyle>
			{!isPostCommentsLoaded ? (
				<Loader isLoaderAbsolute={true} />
			) : (
				<React.Fragment>
					{postComments.map((comment) => {
						return (
							<PostParentComment
								key={`post-comment__${comment.id}`}
								parentComment={comment}
							/>
						);
					})}

					{postCommentsNextAPIEndpoint === null ||
					postComments.length === 0 ? null : (
						<Icon
							iconRole="button"
							iconType="button"
							iconStyleObject={{
								iconPadding: "0.7rem",
								iconMargin: "1rem auto",
							}}
							iconOnClick={handleLoadMoreButtonOnClick}
						>
							<CircularPlus />
						</Icon>
					)}
				</React.Fragment>
			)}
		</PostCommentsStyle>
	);
};

export default MainPostComments;
