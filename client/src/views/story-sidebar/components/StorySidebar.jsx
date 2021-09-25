import * as React from "react";

import StorySidebarUsers from "./StorySidebarUsers";
import StorySidebarHeader from "./StorySidebarHeader";

import { PageSidebarStyle } from "../../../styles";

import styled from "styled-components";

const StorySidebarStyle = styled(PageSidebarStyle)`
	/* FIX */
	& button {
		position: relative;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--char-default);
		background-color: transparent;
		border: 2px solid var(--separator-2);

		display: flex;
		justify-content: center;
		align-items: center;

		& > svg {
			fill: var(--char-default);
			width: 2rem;
			height: 2rem;
		}

		&:hover {
			cursor: pointer;
			background-color: var(--secondary-element-hover-bg-color);
		}
	}
`;

const StorySidebar = ({
	isResponsiveStorySidebarOpen,
	setisResponsiveStorySidebarOpen,
	storySidebarID,
	absoluteSidebarBreakingPoint,
}) => {
	return (
		<StorySidebarStyle
			id={storySidebarID}
			isResponsiveSidebarOpen={isResponsiveStorySidebarOpen}
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<StorySidebarHeader
				absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
				setisResponsiveStorySidebarOpen={setisResponsiveStorySidebarOpen}
			/>

			<StorySidebarUsers />
		</StorySidebarStyle>
	);
};

export default StorySidebar;
