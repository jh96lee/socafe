import * as React from "react";
import { useHistory } from "react-router-dom";

import { Button, Icon } from "../../shared";

import { HomeFeedSectionHeaderStyle } from "../../../styles";

import { Right } from "../../../assets";

const HomeFeedSectionHeader = () => {
	const history = useHistory();

	const handleMoreButtonOnClick = () => {
		history.push("/notifications");
	};
	return (
		<HomeFeedSectionHeaderStyle>
			<h4>Notifications</h4>

			<Button
				buttonType="transparent"
				buttonStyleObject={{ buttonFontSize: "1.3rem" }}
				onClick={handleMoreButtonOnClick}
			>
				More
				<Icon
					iconRole="presentation"
					iconType="presentation"
					iconFill="var(--char-2)"
					iconSize="1.5rem"
				>
					<Right />
				</Icon>
			</Button>
		</HomeFeedSectionHeaderStyle>
	);
};

export default HomeFeedSectionHeader;
