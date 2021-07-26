import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import MainPostCommentReplies from "./MainPostCommentReplies";
import MainPostComment from "./MainPostComment";

import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import {
	MainPostParentCommentStyle,
	MainPostCommentViewRepliesStyle,
} from "../styles/MainPostParentCommentStyle";

import { Up, Down } from "../../../assets";

const MainPostParentComment = ({ parentComment }) => {
	const [postCommentReplies, setPostCommentReplies] = React.useState([]);
	// FIX
	const [isPostCommentRepliesLoaded, setIsPostCommentRepliesLoaded] =
		React.useState(false);
	const [isPostCommentRepliesOpen, setIsPostCommentRepliesOpen] =
		React.useState(false);

	const dispatch = useDispatch();

	const { comment_id, comment_total_replies } = parentComment;

	const handleViewRepliesOnClick = async () => {
		setIsPostCommentRepliesOpen((prevState) => !prevState);
	};

	const afterInitialMount = React.useRef(false);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const fetchPostCommentReplies = async () => {
		setIsPostCommentRepliesLoaded(false);

		const userID = user ? user.id : 0;

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/reply/${userID}/${comment_id}`,
		});

		setPostCommentReplies(data);

		setIsPostCommentRepliesLoaded(true);
	};

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isPostCommentRepliesOpen) {
				fetchPostCommentReplies();
			}
		}

		afterInitialMount.current = true;
	}, [isPostCommentRepliesOpen]);

	React.useEffect(() => {
		if (mainPostComment) {
			if (
				mainPostComment.parent_comment_id &&
				mainPostComment.parent_comment_id === comment_id
			) {
				setIsPostCommentRepliesOpen(true);

				setPostCommentReplies((prevState) => [...prevState, mainPostComment]);

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	return (
		<MainPostParentCommentStyle>
			<MainPostComment
				comment={parentComment}
				replyParentCommentID={comment_id}
			/>

			{isPostCommentRepliesOpen && (
				<MainPostCommentReplies
					postCommentReplies={postCommentReplies}
					replyParentCommentID={comment_id}
				/>
			)}

			{comment_total_replies !== 0 && (
				<MainPostCommentViewRepliesStyle onClick={handleViewRepliesOnClick}>
					<p>
						{isPostCommentRepliesOpen
							? "Hide replies"
							: `View more replies(${comment_total_replies})`}
					</p>

					{isPostCommentRepliesOpen ? <Up /> : <Down />}
				</MainPostCommentViewRepliesStyle>
			)}
		</MainPostParentCommentStyle>
	);
};

export default MainPostParentComment;
