import styled from "styled-components";

export const TextAreaStyle = styled.div`
	color: var(--char-default);

	& > * {
		width: fit-content;
	}

	& p {
		display: inline;
		letter-spacing: -0.4px;
		line-height: 2.5rem;
	}

	& span {
		margin-left: 0.2rem;
		cursor: pointer;
	}
`;
