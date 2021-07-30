import * as React from "react";

import { IconElement } from "../../shared";

import { PostActionStyle } from "../../../styles";

import { HeartFill, HeartEmpty } from "../../../assets";

const MainPostLike = ({ likeIconSize, isLikedProp, totalLikesProp }) => {
	const [isPostLiked, setIsPostLiked] = React.useState(isLikedProp);
	const [postTotalLikes, setPostTotalLikes] = React.useState(totalLikesProp);

	const handlePostBookmarkOnClick = () => {
		setIsPostLiked((prevState) => !prevState);
	};

	const afterInitialMount = React.useRef();

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (isPostLiked) {
				setPostTotalLikes((prevState) => prevState + 1);
			} else {
				setPostTotalLikes((prevState) => prevState - 1);
			}
		}

		afterInitialMount.current = true;
	}, [isPostLiked]);

	return (
		<PostActionStyle>
			<IconElement
				iconRole="button"
				onClick={handlePostBookmarkOnClick}
				iconElementStyleObject={{
					elementBackgroundColor: "var(--likes-bg-color)",
					elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
					iconColor: "var(--likes-icon-color)",
					iconSize: likeIconSize,
				}}
			>
				{isPostLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			<h5>{postTotalLikes}</h5>
		</PostActionStyle>
	);
};

export default MainPostLike;
