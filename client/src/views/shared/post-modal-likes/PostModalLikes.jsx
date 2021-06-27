import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { likeOrUnlikePostModal } from "../../../redux/post-modal/postModalAction";

import { LikesStyle } from "../../../styles";

import { HeartEmpty, HeartFill } from "../../../assets";

const PostModalLikes = ({
	postModalLikesIconSize,
	postModalLikesLabelFontSize,
	disablePostModalLikes,
}) => {
	const dispatch = useDispatch();

	const { postModalID, isPostModalLiked, postModalTotalLikes } = useSelector(
		(state) => state.postModalReducer
	);

	const handlePostModalLikesOnClick = () => {
		dispatch(likeOrUnlikePostModal());
	};

	return (
		<LikesStyle
			postLikesIconSize={postModalLikesIconSize}
			postLikesLabelFontSize={postModalLikesLabelFontSize}
			disablePostLikes={disablePostModalLikes || false}
			onClick={handlePostModalLikesOnClick}
		>
			{isPostModalLiked ? <HeartFill /> : <HeartEmpty />}

			<p>{postModalTotalLikes} Likes</p>
		</LikesStyle>
	);
};

export default PostModalLikes;
