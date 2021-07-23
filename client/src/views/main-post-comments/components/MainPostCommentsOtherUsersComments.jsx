import * as React from "react";

import { MainPostParentComment } from "../../main-post-parent-comment";

const MainPostCommentsOtherUsersComments = ({ otherUsersComments }) => {
	return (
		<React.Fragment>
			{otherUsersComments.map((comment, idx) => {
				return (
					<MainPostParentComment
						key={`main-post-comments__other-user-comment__${idx}`}
						parentComment={comment}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default MainPostCommentsOtherUsersComments;
