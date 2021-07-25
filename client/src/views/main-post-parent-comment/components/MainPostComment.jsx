import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { Avatar } from "../../shared";
import MainPostCommentCaptions from "./MainPostCommentCaptions";

import {
	setMainPostCommentReplyingToUsername,
	setMainPostCommentParentCommentID,
	setMainPostCommentRepliedCommentID,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { convertDate } from "../../../utils/date/convertDate";
import { fetchToken } from "../../../utils/cookie/fetchToken";

import { HeartEmpty, HeartFill } from "../../../assets";

const MainPostCommentStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1.4rem;
	color: var(--text-1);
	width: 100%;
`;

const MainPostCommentBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainPostCommentHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	& > a {
		color: var(--text-1);
		font-size: 1.45rem;
		font-weight: 500;
	}
`;

const DotStyle = styled.div`
	height: 3px;
	width: 3px;
	background-color: grey;
	border-radius: 50%;
`;

const MainPostCommentLikesStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;

	& svg {
		color: var(--likes-icon-color);
		fill: var(--likes-icon-color);
		width: 1.7rem;
		height: 1.7rem;
		cursor: pointer;
	}
`;

const MainPostComment = ({ comment, replyParentCommentID }) => {
	const {
		created_at,
		avatar_url,
		username,
		comment_id,
		comment_nodes_array,
		comment_total_likes,
		comment_is_liked,
	} = comment;

	const [isCommentLiked, setIsCommentLiked] = React.useState(comment_is_liked);
	const [commentTotalLikes, setCommentTotalLikes] =
		React.useState(comment_total_likes);

	const dispatch = useDispatch();

	const handleReplySpanOnClick = () => {
		dispatch(setMainPostCommentReplyingToUsername(username));

		dispatch(setMainPostCommentParentCommentID(replyParentCommentID));

		dispatch(setMainPostCommentRepliedCommentID(comment_id));
	};

	const afterInitialMount = React.useRef(false);

	const handleCommentLikeOnClick = () => {
		setIsCommentLiked((prevState) => !prevState);
	};

	const token = fetchToken();

	const likeComment = async () => {
		axios({
			method: "POST",
			url: `http://localhost:8080/like/comment/${comment_id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	const unlikeComment = async () => {
		axios({
			method: "DELETE",
			url: `http://localhost:8080/unlike/comment/${comment_id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	React.useEffect(() => {
		if (afterInitialMount.current) {
			console.log("LIKING AND UNLIKING COMMENT");
			if (isCommentLiked) {
				setCommentTotalLikes((prevState) => prevState + 1);

				likeComment();
			} else {
				setCommentTotalLikes((prevState) => prevState - 1);

				unlikeComment();
			}
		}

		afterInitialMount.current = true;
	}, [isCommentLiked]);

	return (
		<MainPostCommentStyle>
			<Avatar avatarURL={avatar_url} avatarSize="4rem" />

			<MainPostCommentBodyStyle>
				<MainPostCommentHeaderStyle>
					<Link to={`/user/${username}`}>{username}</Link>

					<DotStyle />

					<span>{convertDate(created_at)}</span>
				</MainPostCommentHeaderStyle>

				<MainPostCommentCaptions commentNodesArray={comment_nodes_array} />

				<span onClick={handleReplySpanOnClick}>reply</span>
			</MainPostCommentBodyStyle>

			<MainPostCommentLikesStyle onClick={handleCommentLikeOnClick}>
				{isCommentLiked ? <HeartFill /> : <HeartEmpty />}

				<p>{commentTotalLikes}</p>
			</MainPostCommentLikesStyle>
		</MainPostCommentStyle>
	);
};

export default MainPostComment;
