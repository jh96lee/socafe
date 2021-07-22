import * as React from "react";

import { IconElement } from "../../shared";

import { MainPostCommentsHeaderStyle } from "../styles/MainPostCommentsHeaderStyle";

import { CloseAlt } from "../../../assets";

const MainPostCommentsHeader = ({ handleClosePostCommentsOnClick }) => {
	return (
		<MainPostCommentsHeaderStyle>
			<h5>Comments</h5>

			<IconElement
				onClick={handleClosePostCommentsOnClick}
				iconID="post-preview-comments__close-alt"
				iconRole="button"
				iconElementStyleObject={{
					iconSize: "1.2rem",
				}}
			>
				<CloseAlt />
			</IconElement>
		</MainPostCommentsHeaderStyle>
	);
};

export default MainPostCommentsHeader;
