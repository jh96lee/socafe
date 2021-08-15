import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader, IconElement } from "../../shared";
import { MainPostParentComment } from "../../main-post-parent-comment";

import {
	fetchedPostComments,
	fetchedExtraPostComments,
} from "../../../redux/main-post-comments/mainPostCommentsAction";
import { addNewPostComment } from "../../../redux/main-post-comments/mainPostCommentsAction";
import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { usePagination } from "../../../hooks";

import { MainPostAllCommentsStyle } from "../styles/MainPostAllCommentsStyle";

import { Plus } from "../../../assets";

const MainPostComments = () => {
	const dispatch = useDispatch();

	const { postComments } = useSelector(
		(state) => state.mainPostCommentsReducer
	);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const postID = parseInt(useParams().postID);

	const {
		currentPage,
		setCurrentPage,
		nextAPIEndpoint,
		fetchContents,
		isInitialContentsLoaded,
	} = usePagination(
		`/comment/parent/${postID}/${userID}`,
		5,
		true,
		fetchedPostComments,
		fetchedExtraPostComments
	);

	React.useEffect(() => {
		fetchContents(true, "GET", null, null);
	}, [postID]);

	React.useEffect(() => {
		if (postComments.length > 0) {
			fetchContents(false, "GET", null, null);
		}
	}, [currentPage]);

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

	const handleMyParentCommentsLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<MainPostAllCommentsStyle>
			{!isInitialContentsLoaded ? (
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

					{nextAPIEndpoint === null || postComments.length === 0 ? null : (
						<IconElement
							onClick={handleMyParentCommentsLoadMoreButtonOnClick}
							iconElementStyleObject={{
								elementPadding: "0.7rem",
								elementWidth: "fit-content",
								elementMargin: "auto",
							}}
						>
							<Plus />
						</IconElement>
					)}
				</React.Fragment>
			)}
		</MainPostAllCommentsStyle>
	);
};

export default MainPostComments;
