import styled from "styled-components";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: translateY(-50%);

	& > h2 {
		color: var(--primary-text-color);
		margin: 3rem 0 2rem 0;
	}

	& > p {
		color: var(--secondary-text-color);
		margin-bottom: 3rem;
	}

	& span {
	}

	& svg {
		width: 5rem;
		height: 5rem;
		fill: var(--success-text-color);
	}
`;

export const NoticeIconStyle = styled.div`
	background-color: var(--success-background-color);
	padding: 1.5rem;
	border-radius: 1rem;
`;
