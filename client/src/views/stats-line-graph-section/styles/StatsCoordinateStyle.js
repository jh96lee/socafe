import styled from "styled-components";

import { DropdownMenuStyle } from "../../../styles";

export const StatsCoordinateStyle = styled.div`
	position: absolute;
	z-index: 5;
	bottom: ${(props) => `${props.coordinateBottom}%`};
	left: ${(props) => `${props.coordinateLeft}%`};
	transform: translate(-50%, 50%);
	width: 2rem;
	height: 2rem;
	border: 3px solid ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
	border-radius: 50%;
	background-color: var(--bg-1);
	opacity: 0;

	& > * {
		display: none !important;
	}

	&:hover {
		cursor: pointer;
		opacity: 1;

		& > * {
			display: flex !important;
		}
	}
`;

export const StatCoordinateDropdownMenuStyle = styled(DropdownMenuStyle)`
	/* TODO: add separately */
	width: 15rem;

	& > p {
		/* TODO: add separately */
		display: flex;
		align-items: center;
		gap: 0.7rem;

		& > svg {
			fill: ${(props) => (props.theme.isDarkMode ? "#f5f5f5" : "#58667e")};
			width: 1.6rem;
			height: 1.6rem;
		}
	}
`;
