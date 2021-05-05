import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--primary-text-color);

	& svg {
		margin-top: 2rem;
		width: 35rem;
		height: 35rem;
	}

	& > *:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

export const NoticeButtonStyle = styled(ButtonStyle)`
	width: 30rem;
	background-color: var(--primary-clickable-background-color);
	color: #fff;
`;
