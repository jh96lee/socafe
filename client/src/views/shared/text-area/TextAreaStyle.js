import styled from "styled-components";

export const TextAreaStyle = styled.div`
	& > p {
		color: var(--char-default);
		letter-spacing: -0.4px;
		line-height: 2.5rem;
	}

	& > * {
		width: fit-content;
	}

	& span {
		display: inline;
		font-size: 1.43rem;
		margin-left: 0.2rem;
		cursor: pointer;
	}
`;
