import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { MainPostComment } from "../../main-post-comment";
import MainPostCommentReplies from "./MainPostCommentReplies";
import MainPostViewOrHideReplies from "./MainPostViewOrHideReplies";

import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { usePagination } from "../../../hooks";

import { MainPostParentCommentStyle } from "../styles/MainPostParentCommentStyle";

const MainPostParentComment = ({ parentComment }) => {
	const dispatch = useDispatch();

	const [isRepliesOpen, setIsRepliesOpen] = React.useState(false);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
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
	} = usePagination(
		`/comment/reply/${id}/${userID}`,
		3,
		false,
		null,
		null,
		false
	);

	const afterInitialMount = React.useRef(false);

	// REVIEW: fetch initial comments
	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isRepliesOpen) {
				fetchContents(true, "GET", null, null);
			}
		}

		afterInitialMount.current = true;
	}, [isRepliesOpen]);

	// REVIEW: this is for fetching extra comments
	React.useEffect(() => {
		if (contents.length > 0) {
			fetchContents(false, "GET", null, null);
		}
	}, [currentPage]);

	// REVIEW: if the recently posted comment is a reply, then we open up, which then will trigger the initial comment fetching
	// REVIEW: then we reset mainPostComment
	React.useEffect(() => {
		if (mainPostComment) {
			if (
				mainPostComment.parent_comment_id &&
				mainPostComment.parent_comment_id === id
			) {
				setIsRepliesOpen(true);

				setContents((prevState) => [...prevState, mainPostComment]);

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	return (
		<MainPostParentCommentStyle>
			<MainPostComment comment={parentComment} />

			<MainPostViewOrHideReplies
				isRepliesOpen={isRepliesOpen}
				setIsRepliesOpen={setIsRepliesOpen}
				setCurrentPage={setCurrentPage}
				commentTotalReplies={comment_total_replies}
				nextAPIEndpoint={nextAPIEndpoint}
			/>

			{isRepliesOpen && (
				<MainPostCommentReplies
					replies={contents}
					setReplies={setContents}
					isRepliesLoaded={isInitialContentsLoaded}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</MainPostParentCommentStyle>
	);
};

export default MainPostParentComment;
