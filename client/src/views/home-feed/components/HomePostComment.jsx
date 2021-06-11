import * as React from "react";

import { IconElement } from "../../shared";

import { HomePostTotalDataStyle } from "../styles/HomePostTotalDataStyle";

import { Comment } from "../../../assets";

const HomePostComment = ({ totalComments }) => {
	return (
		<HomePostTotalDataStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementPadding: "0rem",
					elementHoverBackgroundColor: "none",
					iconColor: "var(--icon-2)",
					iconHoverColor: "#var(--icon-2)",
					iconSize: "2.2rem",
				}}
			>
				<Comment />
			</IconElement>

			<p>{totalComments} </p>
		</HomePostTotalDataStyle>
	);
};

export default HomePostComment;
