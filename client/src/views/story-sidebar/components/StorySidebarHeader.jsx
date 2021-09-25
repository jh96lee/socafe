import * as React from "react";
import { useHistory } from "react-router-dom";

import { Icon } from "../../shared";

import { PageSidebarHeaderStyle } from "../../../styles";

import { Left, Remove } from "../../../assets";

const StorySidebarHeader = ({
	absoluteSidebarBreakingPoint,
	setisResponsiveStorySidebarOpen,
}) => {
	const history = useHistory();

	const handleIconOnClick = () => {
		history.push("/");
	};

	const handleRemoveIconOnClick = () => {
		setisResponsiveStorySidebarOpen(false);
	};

	return (
		<PageSidebarHeaderStyle
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<Icon iconRole="button" iconOnClick={handleIconOnClick}>
				<Left />
			</Icon>

			<h2>Stories</h2>

			<Icon iconRole="button" iconOnClick={handleRemoveIconOnClick}>
				<Remove />
			</Icon>
		</PageSidebarHeaderStyle>
	);
};

export default StorySidebarHeader;
