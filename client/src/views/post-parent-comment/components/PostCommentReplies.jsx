import * as React from "react";

import { Loader } from "../../shared";
import { PostComment } from "../../post-comment";

import { PostCommentRepliesStyle } from "../styles/PostCommentRepliesStyle";

const PostCommentReplies = ({ replies, setReplies, isRepliesLoaded }) => {
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
		<PostCommentRepliesStyle>
			{isRepliesLoaded ? (
				<React.Fragment>
					{replies.map((reply) => {
						return (
							<PostComment
								key={`main-post-comment__reply-${reply.id}`}
								comment={reply}
								setDeletedCommentID={setDeletedCommentID}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader loaderSize="2.7rem" loaderBorderSize="0.38rem" />
			)}
		</PostCommentRepliesStyle>
	);
};

export default PostCommentReplies;
