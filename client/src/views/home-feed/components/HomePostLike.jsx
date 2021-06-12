import * as React from "react";

import { IconElement } from "../../shared";

import { HomePostTotalDataStyle } from "../styles/HomePostTotalDataStyle";

import { HeartFill, HeartEmpty } from "../../../assets";

const HomePostLike = ({ isLiked, totalLikes, onClick }) => {
	return (
		<HomePostTotalDataStyle>
			<IconElement
				iconRole="button"
				onClick={onClick}
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "#ff0000",
					iconHoverColor: "#d80000",
					iconSize: "2.2rem",
				}}
			>
				{isLiked ? <HeartFill /> : <HeartEmpty />}
			</IconElement>

			<p>{totalLikes}</p>
		</HomePostTotalDataStyle>
	);
};

export default HomePostLike;
