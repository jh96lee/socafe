import React from "react";

import { likeComment } from "../../../utils/comment/likeComment";
import { unlikeComment } from "../../../utils/comment/unlikeComment";

import { MainPostCommentLikeStyle } from "../styles/MainPostCommentLikeStyle";

import { HeartFill, HeartEmpty } from "../../../assets";

const MainPostCommentLike = ({
	commentID,
	isCommentLikedProp,
	commentTotalLikesProp,
}) => {
	const [isCommentLiked, setIsCommentLiked] =
		React.useState(isCommentLikedProp);
	const [commentTotalLikes, setCommentTotalLikes] = React.useState(
		commentTotalLikesProp
	);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isCommentLiked) {
				setCommentTotalLikes((prevState) => prevState + 1);

				likeComment(commentID);
			} else {
				setCommentTotalLikes((prevState) => prevState - 1);

				unlikeComment(commentID);
			}
		}

		afterInitialMount.current = true;
	}, [isCommentLiked]);

	const handleCommentLikeOnClick = () => {
		setIsCommentLiked((prevState) => !prevState);
	};

	return (
		<MainPostCommentLikeStyle onClick={handleCommentLikeOnClick}>
			{isCommentLiked ? <HeartFill /> : <HeartEmpty />}

			<p>{commentTotalLikes}</p>
		</MainPostCommentLikeStyle>
	);
};

export default MainPostCommentLike;
