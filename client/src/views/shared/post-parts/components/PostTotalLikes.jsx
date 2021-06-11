import * as React from "react";

import { IconElement, Skeleton } from "../../index";

import { HeartFill, HeartEmpty } from "../../../../assets";

import { PostTotalNumbersStyle } from "../styles/PostTotalNumbersStyle";

const PostTotalLikes = ({
	postTotalLikes,
	conditionalPostTotalLikesRenderingVariable,
}) => {
	const [isLiked, setIsLiked] = React.useState(false);

	const handleOnClick = () => {
		setIsLiked((prevState) => !prevState);
	};

	return (
		<PostTotalNumbersStyle>
			<IconElement
				iconRole="button"
				onClick={handleOnClick}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.1rem",
				}}
			>
				{isLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			{conditionalPostTotalLikesRenderingVariable ? (
				<p>{postTotalLikes} Likes</p>
			) : (
				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			)}
		</PostTotalNumbersStyle>
	);
};

export default PostTotalLikes;
