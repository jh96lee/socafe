import * as React from "react";
import styled from "styled-components";

import MainPostCommentsMyParentComments from "./MainPostCommentsMyParentComments";
import MainPostCommentsOtherUsersComments from "./MainPostCommentsOtherUsersComments";

const MainPostCommentsBodyStyle = styled.div`
	height: 100%;
	overflow: scroll;
`;

const MainPostCommentsBody = () => {
	return (
		<MainPostCommentsBodyStyle>
			<MainPostCommentsMyParentComments />

			<MainPostCommentsOtherUsersComments />
		</MainPostCommentsBodyStyle>
	);
};

export default MainPostCommentsBody;
