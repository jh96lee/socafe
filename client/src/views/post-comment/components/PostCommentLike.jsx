import React from "react";

import { likeCommentRequest, unlikeCommentRequest } from "../../../utils";

import { PostCommentLikeStyle } from "../styles/PostCommentLikeStyle";

import { LikeFilled, LikeOutline } from "../../../assets";

const PostCommentLike = ({
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

				likeCommentRequest(commentID);
			} else {
				setCommentTotalLikes((prevState) => prevState - 1);

				unlikeCommentRequest(commentID);
			}
		}

		afterInitialMount.current = true;
	}, [isCommentLiked]);

	const handleCommentLikeOnClick = () => {
		setIsCommentLiked((prevState) => !prevState);
	};

	return (
		<PostCommentLikeStyle onClick={handleCommentLikeOnClick}>
			{isCommentLiked ? <LikeFilled /> : <LikeOutline />}

			<p>{commentTotalLikes}</p>
		</PostCommentLikeStyle>
	);
};

export default PostCommentLike;
