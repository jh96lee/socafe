import * as React from "react";
import { useHistory } from "react-router";

import { Icon } from "../../shared";

import { PageSidebarHeaderStyle } from "../../../styles";

import { Left, Remove } from "../../../assets";

const AddStorySidebarHeader = ({
	absoluteSidebarBreakingPoint,
	setisResponsiveAddStorySidebarOpen,
}) => {
	const history = useHistory();

	const handleIconOnClick = () => {
		history.push("/");
	};

	const handleRemoveIconOnClick = () => {
		setisResponsiveAddStorySidebarOpen(false);
	};

	return (
		<PageSidebarHeaderStyle
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<Icon iconRole="button" iconOnClick={handleIconOnClick}>
				<Left />
			</Icon>

			<h2>Add Story</h2>

			<Icon iconRole="button" iconOnClick={handleRemoveIconOnClick}>
				<Remove />
			</Icon>
		</PageSidebarHeaderStyle>
	);
};

export default AddStorySidebarHeader;
