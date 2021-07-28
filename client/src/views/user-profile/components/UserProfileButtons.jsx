import * as React from "react";
import styled from "styled-components";

import { Button } from "../../shared";

const UserProfileButtonsStyle = styled.div``;

const UserProfileButtons = () => {
	return (
		<UserProfileButtonsStyle>
			<Button
				buttonStyleObject={{
					buttonFontSize: "1.43rem",
					buttonHeight: "fit-content",
				}}
			>
				Follow
			</Button>
		</UserProfileButtonsStyle>
	);
};

export default UserProfileButtons;
