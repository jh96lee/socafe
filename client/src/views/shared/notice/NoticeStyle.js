import styled from "styled-components";

export const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 37rem;
	padding: 3.5rem 2.5rem;
	margin: 5rem auto;
	border: 1px solid var(--input-default-separator-color);
	box-shadow: 0 0 7px 1.6px var(--input-default-separator-color);
	border-radius: 1rem;

	& > h2 {
		color: var(--char-default);
		margin: 2rem 0 1.5rem 0;
	}

	& > p {
		color: var(--text-2);
		padding: 0 1rem;
		margin-bottom: 3rem;
		text-align: center;
	}
`;
