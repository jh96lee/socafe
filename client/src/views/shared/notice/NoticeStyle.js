import styled from "styled-components";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: translateY(50%);

	& > h2 {
		color: var(--text-1);
		margin: 1rem 0 2rem 0;
	}

	& > p {
		color: var(--txt-2);
		margin-bottom: 3rem;
	}

	& span {
	}

	& svg {
		width: 5rem;
		height: 5rem;
		fill: var(--txt-success);
	}
`;

export const NoticeIconStyle = styled.div`
	background-color: var(--bg-success);
	padding: 1.5rem;
	border-radius: 1rem;
`;
