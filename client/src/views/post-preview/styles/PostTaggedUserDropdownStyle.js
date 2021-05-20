import styled from "styled-components";

import { DropdownStyle } from "../../../styles";

export const PostTaggedUserDropdownStyle = styled(DropdownStyle)`
	position: absolute;
	z-index: 10;
	left: 7px;
	bottom: 7px;
`;

export const PostTaggedUserIconStyle = styled.div`
	padding: 0.9rem;
	border-radius: 50%;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#d0f0ff40" : "#fff"};
	cursor: pointer;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) => (props.theme.isDarkMode ? "#fff" : "#64748b")};
	}
`;
