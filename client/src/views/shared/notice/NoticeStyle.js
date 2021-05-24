import styled from "styled-components";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--primary-text-color);

	& svg {
		width: 25rem;
		height: 25rem;
	}

	& > *:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
