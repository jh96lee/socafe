import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import MainPostCommentReplies from "./MainPostCommentReplies";
import MainPostComment from "./MainPostComment";

import {
	resetPostedMainPostComment,
	resetMainPostComment,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { Up, Down } from "../../../assets";

const MainPostParentCommentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& > *:first-child {
		width: 100%;
	}

	& > *:not(:first-child) {
		width: 85%;
		margin-left: auto;
	}
`;

const MainPostCommentViewRepliesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > p {
		font-size: 1.2rem;
		color: var(--text-1);
	}

	& > svg {
		fill: var(--icon-default-color);
		width: 1.2rem;
		height: 1.2rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > p {
		text-decoration: underline;
	}
`;

const MainPostParentComment = ({ parentComment }) => {
	const [postCommentReplies, setPostCommentReplies] = React.useState([]);
	const [isPostCommentRepliesLoading, setIsPostCommentRepliesLoading] =
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
		setIsPostCommentRepliesLoading(true);

		const userID = user ? user.id : 0;

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/reply/${userID}/${comment_id}`,
		});

		setPostCommentReplies(data);

		setIsPostCommentRepliesLoading(false);
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

				setPostCommentReplies((prevState) => [mainPostComment, ...prevState]);

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	console.log("PARENT", parentComment);

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
