import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

import {
	MainPostCommentStyle,
	MainPostCommentBodyStyle,
	MainPostCommentHeaderStyle,
	MainPostCommentLikesStyle,
	MainPostCommentDotStyle,
} from "../styles/MainPostCommentStyle";

import { HeartEmpty, HeartFill } from "../../../assets";

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

					<MainPostCommentDotStyle />

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
