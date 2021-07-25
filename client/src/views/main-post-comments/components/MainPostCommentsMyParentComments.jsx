import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { MainPostParentComment } from "../../main-post-parent-comment";

import { addNewMyParentComment } from "../../../redux/main-post-comments/main-post-my-parent-comments/mainPostMyParentCommentsAction";
import {
	resetPostedMainPostComment,
	resetMainPostComment,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

const MainPostCommentsMyParentComments = ({ myParentComments }) => {
	const dispatch = useDispatch();

	const postID = parseInt(useParams().postID);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	React.useEffect(() => {
		if (mainPostComment) {
			if (
				mainPostComment.parent_comment_id === null &&
				mainPostComment.post_id === postID
			) {
				dispatch(addNewMyParentComment(mainPostComment));

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	return (
		<React.Fragment>
			{myParentComments.map((comment, idx) => {
				return (
					<MainPostParentComment
						key={`main-post-comments__my-parent-comment__${idx}`}
						parentComment={comment}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default MainPostCommentsMyParentComments;
