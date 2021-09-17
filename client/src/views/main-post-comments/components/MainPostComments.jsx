import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader, Icon } from "../../shared";
import { MainPostParentComment } from "../../main-post-parent-comment";

import {
	fetchPostComments,
	fetchExtraPostComments,
	setPostCommentsPage,
	resetPostcomments,
} from "../../../redux/main-post-comments/mainPostCommentsAction";
import { addNewPostComment } from "../../../redux/main-post-comments/mainPostCommentsAction";
import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { MainPostAllCommentsStyle } from "../styles/MainPostAllCommentsStyle";

import { CircularPlus } from "../../../assets";

const MainPostComments = () => {
	const dispatch = useDispatch();

	const {
		currentPostCommentsPage,
		isPostCommentsLoaded,
		postComments,
		postCommentsNextAPIEndpoint,
	} = useSelector((state) => state.mainPostCommentsReducer);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

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

	React.useEffect(() => {
		if (mainPostComment !== null) {
			if (
				mainPostComment.post_id === postID &&
				mainPostComment.parent_comment_id === null
			) {
				dispatch(addNewPostComment(mainPostComment));

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setPostCommentsPage());
	};

	return (
		<MainPostAllCommentsStyle>
			{!isPostCommentsLoaded ? (
				<Loader isLoaderAbsolute={true} />
			) : (
				<React.Fragment>
					{postComments.map((comment) => {
						return (
							<MainPostParentComment
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
							iconElementStyleObject={{
								iconPadding: "0.7rem",
								iconMargin: "auto",
							}}
							iconOnClick={handleLoadMoreButtonOnClick}
						>
							<CircularPlus />
						</Icon>
					)}
				</React.Fragment>
			)}
		</MainPostAllCommentsStyle>
	);
};

export default MainPostComments;
