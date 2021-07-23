import * as React from "react";

import MainPostCommentsHeader from "./MainPostCommentsHeader";
import MainPostCommentsBody from "./MainPostCommentsBody";
import MainPostCommentsFooter from "./MainPostCommentsFooter";

import { MainPostCommentsStyle } from "../styles/MainPostCommentsStyle";

const MainPostComments = () => {
	return (
		<MainPostCommentsStyle>
			<MainPostCommentsHeader />

			<MainPostCommentsBody />

			<MainPostCommentsFooter />
		</MainPostCommentsStyle>
	);
};

export default MainPostComments;
