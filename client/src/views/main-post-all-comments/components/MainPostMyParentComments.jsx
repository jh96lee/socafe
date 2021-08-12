import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { addMyParentComment } from "../../../redux/main-post-all-comments/main-post-my-parent-comments/mainPostMyParentCommentsAction";
import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { MainPostParentComment } from "../../main-post-parent-comment";

const MainPostMyParentComments = () => {
	const dispatch = useDispatch();

	const { myParentComments } = useSelector(
		(state) => state.mainPostMyParentCommentsReducer
	);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const postID = parseInt(useParams().postID);

	React.useEffect(() => {
		if (mainPostComment !== null) {
			if (
				mainPostComment.post_id === postID &&
				mainPostComment.parent_comment_id === null
			) {
				dispatch(addMyParentComment(mainPostComment));

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	return (
		<React.Fragment>
			{myParentComments.map((comment) => {
				return (
					<MainPostParentComment
						key={`my-parent-comment__${comment.id}`}
						comment={comment}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default MainPostMyParentComments;
