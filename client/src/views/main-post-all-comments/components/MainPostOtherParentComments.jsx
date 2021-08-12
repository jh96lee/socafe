import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { MainPostParentComment } from "../../main-post-parent-comment";

const MainPostOtherParentComments = () => {
	const { otherParentComments } = useSelector(
		(state) => state.mainPostOtherParentCommentsReducer
	);

	return (
		<React.Fragment>
			{otherParentComments.map((comment) => {
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

export default MainPostOtherParentComments;
