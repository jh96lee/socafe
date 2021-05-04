import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--primary-text-color);

	& > *:not(:last-child) {
		margin-bottom: 3rem;
	}

	& > svg {
		width: 25rem;
		height: 25rem;
	}
`;

export const NoticeButtonStyle = styled(ButtonStyle)`
	color: #fff;
	background-color: var(--primary-clickable-background-color);
	width: 25rem;
`;
