import * as React from "react";

import { Loader } from "../../shared";
import { MainPostComment } from "../../main-post-comment";

import { MainPostCommentRepliesStyle } from "../styles/MainPostCommentRepliesStyle";

const MainPostCommentReplies = ({ replies, setReplies, isRepliesLoaded }) => {
	const [deletedCommentID, setDeletedCommentID] = React.useState(false);

	React.useEffect(() => {
		if (deletedCommentID) {
			setReplies((prevState) => {
				return prevState.filter((comment) => {
					return comment.id !== deletedCommentID;
				});
			});
		}

		setDeletedCommentID(null);
	}, [deletedCommentID]);

	return (
		<MainPostCommentRepliesStyle>
			{isRepliesLoaded ? (
				<React.Fragment>
					{replies.map((reply) => {
						return (
							<MainPostComment
								key={`main-post-comment__reply-${reply.id}`}
								comment={reply}
								setDeletedCommentID={setDeletedCommentID}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</MainPostCommentRepliesStyle>
	);
};

export default MainPostCommentReplies;
