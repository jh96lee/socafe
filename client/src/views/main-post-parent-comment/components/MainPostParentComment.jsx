import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { MainPostComment } from "../../main-post-comment";
import MainPostCommentReplies from "./MainPostCommentReplies";

import { resetMainPostComment } from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { usePagination } from "../../../hooks";

import { MainPostParentCommentStyle } from "../styles/MainPostParentCommentStyle";

import styled from "styled-components";

import { Up, Down } from "../../../assets";

const MainPostParentCommentViewRepliesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > p {
		font-size: 1.2rem;
		color: var(--text-1);
	}

	& > svg {
		fill: grey;
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > span {
		text-decoration: underline;
	}
`;

const MainPostParentCommentShowOrHideRepliesStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MainPostParentComment = ({ comment }) => {
	const dispatch = useDispatch();

	const [isRepliesOpen, setIsRepliesOpen] = React.useState(false);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const { id, comment_total_replies } = comment;

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
		2,
		false,
		null,
		null,
		false
	);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isRepliesOpen) {
				fetchContents(true, "GET", null, null);
			}
		}

		afterInitialMount.current = true;
	}, [isRepliesOpen]);

	React.useEffect(() => {
		if (contents.length > 0) {
			fetchContents(false, "GET", null, null);
		}
	}, [currentPage]);

	React.useEffect(() => {
		if (mainPostComment) {
			if (
				mainPostComment.parent_comment_id &&
				mainPostComment.parent_comment_id === id
			) {
				setIsRepliesOpen(true);

				setContents((prevState) => [mainPostComment, ...prevState]);

				dispatch(resetMainPostComment());
			}
		}
	}, [mainPostComment]);

	const handleViewRepliesOnClick = () => {
		if (!isRepliesOpen) {
			setIsRepliesOpen((prevState) => !prevState);
		} else if (nextAPIEndpoint === null) {
			return;
		} else {
			setCurrentPage((prevState) => prevState + 1);
		}
	};

	return (
		<MainPostParentCommentStyle>
			<MainPostComment comment={comment} />

			<MainPostParentCommentShowOrHideRepliesStyle>
				{comment_total_replies !== 0 && (
					<MainPostParentCommentViewRepliesStyle
						onClick={handleViewRepliesOnClick}
					>
						<span>
							View more replies
							{!isRepliesOpen ? `(${comment_total_replies})` : null}
						</span>

						{!isRepliesOpen ? <Down /> : null}
					</MainPostParentCommentViewRepliesStyle>
				)}

				{isRepliesOpen && (
					<MainPostParentCommentViewRepliesStyle
						onClick={() => {
							setIsRepliesOpen(false);
						}}
					>
						<span>Hide</span>

						<Up />
					</MainPostParentCommentViewRepliesStyle>
				)}
			</MainPostParentCommentShowOrHideRepliesStyle>

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
