import * as React from "react";

import { MainPostCommentsInput } from "../../main-post-comments-input";

import { MainPostCommentsFooterStyle } from "../styles/MainPostCommentsFooterStyle";

const MainPostCommentsFooter = () => {
	return (
		<MainPostCommentsFooterStyle>
			<MainPostCommentsInput />
		</MainPostCommentsFooterStyle>
	);
};

export default MainPostCommentsFooter;
